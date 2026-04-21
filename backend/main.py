"""
FastAPI backend for LLM Wiki system.
"""
import json
import logging
import re
import shutil
import sys
import traceback
from pathlib import Path

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

import sys

from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from wiki_engine import (
    append_log,
    enrich_graph_with_sources,
    extract_knowledge,
    generate_wiki_pages,
    merge_into_graph,
    parse_paper_metadata,
    save_wiki_pages,
    update_index,
)

DATA_DIR = Path(__file__).parent.parent / "data"
RAW_DIR = DATA_DIR / "raw"
WIKI_DIR = DATA_DIR / "wiki"
GRAPH_PATH = DATA_DIR / "graph.json"
FRONTEND_DIST = Path(__file__).parent.parent / "frontend" / "dist"

app = FastAPI(title="LLM Wiki")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def _load_graph() -> dict:
    """Load graph.json and opportunistically upgrade stored metadata."""
    if not GRAPH_PATH.exists():
        return {"nodes": [], "edges": [], "papers": []}

    with open(GRAPH_PATH) as f:
        graph = json.load(f)

    if enrich_graph_with_sources(graph, RAW_DIR):
        with open(GRAPH_PATH, "w") as f:
            json.dump(graph, f, indent=2)

    return graph


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    tb = traceback.format_exc()
    print("=== UNHANDLED EXCEPTION ===", file=sys.stderr, flush=True)
    print(tb, file=sys.stderr, flush=True)
    print("===========================", file=sys.stderr, flush=True)
    return JSONResponse(status_code=500, content={"detail": str(exc)})


# ── Graph endpoints ──────────────────────────────────────────────────────────

@app.get("/api/graph")
def get_graph():
    """Return the current knowledge graph."""
    return _load_graph()


@app.get("/api/node/{node_id}")
def get_node(node_id: str):
    """Return wiki content for a specific node."""
    wiki_file = WIKI_DIR / f"{node_id}.md"
    graph = _load_graph()

    if not wiki_file.exists():
        # Return basic info from graph
        for node in graph["nodes"]:
            if node["id"] == node_id:
                return {"content": f"# {node['label']}\n\n{node['description']}", "node": node}
        raise HTTPException(status_code=404, detail="Node not found")

    with open(wiki_file) as f:
        content = f.read()

    # Get node metadata from graph
    node_meta = {}
    for node in graph["nodes"]:
        if node["id"] == node_id:
            node_meta = node
            break

    return {"content": content, "node": node_meta}


@app.get("/api/papers")
def list_papers():
    """List all ingested papers."""
    graph = _load_graph()
    return graph.get("papers", [])


# ── Ingest endpoint ──────────────────────────────────────────────────────────

@app.post("/api/ingest")
async def ingest_paper(file: UploadFile = File(...)):
    """Upload and process a Markdown file into the knowledge graph."""
    if not file.filename or not file.filename.lower().endswith(".md"):
        raise HTTPException(status_code=400, detail="Only Markdown (.md) files are supported")

    try:
        raw_bytes = await file.read()
        return _ingest_markdown(raw_bytes.decode("utf-8", errors="replace"), file.filename)
    except json.JSONDecodeError as e:
        print("=== JSON DECODE ERROR ===", traceback.format_exc(), file=sys.stderr, flush=True)
        raise HTTPException(status_code=500, detail=f"LLM returned invalid JSON: {e}")
    except Exception as e:
        print("=== INGEST ERROR ===", traceback.format_exc(), file=sys.stderr, flush=True)
        raise HTTPException(status_code=500, detail=str(e))


def _ingest_markdown(text: str, filename: str) -> dict:
    """Shared ingest logic: markdown text → graph update result."""
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    raw_path = RAW_DIR / filename
    with open(raw_path, "w", encoding="utf-8") as f:
        f.write(text)

    if len(text.strip()) < 100:
        raise ValueError("File appears to be empty or too short")

    # Step 1: extract graph structure (compact JSON, stays under token limit)
    extracted = extract_knowledge(text)
    paper_record = parse_paper_metadata(
        text,
        filename,
        fallback_title=extracted.get("paper_title", ""),
        fallback_summary=extracted.get("paper_summary", ""),
    )

    # Step 2: generate wiki pages for all nodes (separate call)
    wiki_map = generate_wiki_pages(
        extracted["nodes"],
        extracted.get("paper_title", ""),
        extracted.get("paper_summary", ""),
    )
    for node in extracted["nodes"]:
        node["wiki"] = wiki_map.get(node["id"], "")
        node["sources"] = [{
            "paper_id": paper_record["id"],
            "paper_title": paper_record["title"],
            "citation": paper_record.get("citation", ""),
            "source_url": paper_record.get("source_url", ""),
            "filename": paper_record.get("filename", ""),
        }]

    graph = merge_into_graph(extracted, GRAPH_PATH, paper=paper_record)
    enrich_graph_with_sources(graph, RAW_DIR)

    GRAPH_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(GRAPH_PATH, "w") as f:
        json.dump(graph, f, indent=2)

    save_wiki_pages(extracted["nodes"], WIKI_DIR)
    update_index(graph, DATA_DIR)
    append_log(
        f"ingest | {extracted.get('paper_title', filename)} | "
        f"{len(extracted['nodes'])} nodes, {len(extracted['edges'])} edges",
        DATA_DIR,
    )
    return {
        "status": "ok",
        "paper_title": extracted.get("paper_title"),
        "paper_summary": extracted.get("paper_summary"),
        "nodes_added": len(extracted["nodes"]),
        "edges_added": len(extracted["edges"]),
        "total_nodes": len(graph["nodes"]),
        "total_edges": len(graph["edges"]),
    }


# ── Search endpoint ───────────────────────────────────────────────────────────

def _build_snippet(text: str, match_start: int, match_len: int, context_before: int = 40, context_after: int = 120) -> str:
    """Extract a text snippet around a match, snapped to word boundaries."""
    start = max(0, match_start - context_before)
    end = min(len(text), match_start + match_len + context_after)

    # Snap to word boundaries
    if start > 0:
        space = text.rfind(' ', max(0, start - 20), start + 10)
        if space != -1:
            start = space + 1
    if end < len(text):
        space = text.find(' ', end - 10, end + 20)
        if space != -1:
            end = space

    snippet = text[start:end].strip()
    snippet = re.sub(r'\s+', ' ', snippet)

    prefix = '...' if start > 0 else ''
    suffix = '...' if end < len(text) else ''
    return f"{prefix}{snippet}{suffix}"


@app.get("/api/search/papers")
def search_papers(q: str = "", limit: int = 10):
    """Full-text search across raw paper markdown files."""
    q = q.strip()
    if len(q) < 2:
        return []

    graph = _load_graph()
    paper_by_filename = {p.get("filename", ""): p for p in graph.get("papers", [])}

    results = []
    q_lower = q.lower()

    for path in sorted(RAW_DIR.glob("*.md")):
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue

        idx = text.lower().find(q_lower)
        if idx == -1:
            continue

        snippet = _build_snippet(text, idx, len(q))
        paper_meta = paper_by_filename.get(path.name, {})

        results.append({
            "paper_id": paper_meta.get("id", path.stem),
            "title": paper_meta.get("title", path.stem),
            "source_url": paper_meta.get("source_url", ""),
            "filename": path.name,
            "snippet": snippet,
        })

        if len(results) >= limit:
            break

    return results


@app.delete("/api/graph/reset")
def reset_graph():
    """Clear all graph data (destructive)."""
    if GRAPH_PATH.exists():
        GRAPH_PATH.unlink()
    if WIKI_DIR.exists():
        shutil.rmtree(WIKI_DIR)
    WIKI_DIR.mkdir(exist_ok=True)
    return {"status": "reset"}


# ── Serve frontend ────────────────────────────────────────────────────────────

if FRONTEND_DIST.exists():
    app.mount("/assets", StaticFiles(directory=str(FRONTEND_DIST / "assets")), name="assets")

    @app.get("/")
    def serve_index():
        return FileResponse(str(FRONTEND_DIST / "index.html"))

    @app.get("/{full_path:path}")
    def serve_spa(full_path: str):
        # Don't catch API routes
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404)
        fp = FRONTEND_DIST / full_path
        if fp.exists() and fp.is_file():
            return FileResponse(str(fp))
        return FileResponse(str(FRONTEND_DIST / "index.html"))
