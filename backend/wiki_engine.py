"""
Core LLM engine for extracting knowledge graph and wiki pages from papers.
"""
import json
import re
from pathlib import Path
import anthropic

client = anthropic.Anthropic()

# Step 1: extract graph structure only — no wiki content, stays well under token limit
GRAPH_EXTRACTION_PROMPT = """You are a research knowledge graph builder. Analyze this academic paper and extract the key concepts and their relationships.

Respond with ONLY valid JSON in this exact structure (no markdown fences, no extra text):
{
  "paper_title": "string",
  "paper_summary": "2-3 sentence summary",
  "nodes": [
    {
      "id": "unique_snake_case_id",
      "label": "Display Name",
      "type": "concept|method|model|dataset|author|institution|metric",
      "description": "1-2 sentence description"
    }
  ],
  "edges": [
    {
      "source": "node_id",
      "target": "node_id",
      "relation": "short relationship label",
      "description": "1 sentence explaining the relationship"
    }
  ]
}

Rules:
- Extract 10-25 nodes, 15-40 edges
- node ids must be unique snake_case strings with no spaces or special characters
- Focus on the most important concepts that would appear in a research survey
- Edge relations: uses, extends, compares_to, introduces, evaluates_on, outperforms, part_of, based_on, applies_to, improves, trains_on

Paper text:
"""

# Step 2: generate a wiki page for a single node
WIKI_PROMPT = """Write a concise wiki page for the following concept from an academic paper.

Concept: {label} ({type})
Context: {description}
Paper: {paper_title}
Paper summary: {paper_summary}

Write 2-4 paragraphs of markdown covering: what it is, why it matters, how it works (if applicable), and its role in the paper. Be specific and informative. No headers needed — just flowing prose paragraphs."""


def _slugify(text: str) -> str:
    """Convert text to a stable snake_case identifier."""
    slug = re.sub(r"[^a-zA-Z0-9]+", "_", text.strip().lower()).strip("_")
    return slug or "unknown"


def _split_frontmatter(text: str) -> tuple[dict, str]:
    """Extract simple YAML-style frontmatter without extra dependencies."""
    if not text.startswith("---\n"):
        return {}, text

    parts = text.split("\n---\n", 1)
    if len(parts) != 2:
        return {}, text

    frontmatter_text = parts[0][4:]
    body = parts[1]
    data: dict = {}

    for line in frontmatter_text.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = value.strip().strip('"').strip("'")

    return data, body


def _extract_citation_block(body: str, fallback_title: str) -> str:
    """Capture the paper's title/author/date block in roughly the paper's own format."""
    lines = [line.rstrip() for line in body.splitlines()]
    abstract_idx = next(
        (i for i, line in enumerate(lines) if re.match(r"^\s*#{1,6}\s*abstract\s*$", line, re.I)),
        len(lines),
    )

    header_lines: list[str] = []
    for raw_line in lines[:abstract_idx]:
        line = raw_line.strip()
        if not line or line == "---":
            continue
        if re.fullmatch(r"(<sup>.*?</sup>\s*)+", line):
            continue
        if line.startswith("<svg") or line.lower().startswith("figure "):
            break

        if line.startswith("#"):
            line = re.sub(r"^\s*#+\s*", "", line)
            line = re.sub(r"†.*$", "", line).strip()
            if not line or line.lower() == "abstract":
                continue

        header_lines.append(line)
        if len(header_lines) >= 5:
            break

    cleaned: list[str] = []
    for line in header_lines:
        if cleaned and cleaned[-1] == line:
            continue
        cleaned.append(line)

    if not cleaned and fallback_title:
        cleaned.append(fallback_title)
    elif cleaned and fallback_title and cleaned[0].casefold() != fallback_title.casefold():
        cleaned.insert(0, fallback_title)

    return "\n".join(cleaned).strip()


def parse_paper_metadata(
    text: str,
    filename: str,
    fallback_title: str = "",
    fallback_summary: str = "",
) -> dict:
    """Extract persistent paper metadata from the raw Markdown source."""
    frontmatter, body = _split_frontmatter(text)
    title = fallback_title or frontmatter.get("title") or Path(filename).stem

    return {
        "id": _slugify(title),
        "title": title,
        "summary": fallback_summary,
        "source_url": frontmatter.get("source", ""),
        "citation": _extract_citation_block(body, title),
        "filename": filename,
    }


def _paper_source_entry(paper: dict) -> dict:
    """Convert a paper record into the compact node-level source shape."""
    return {
        "paper_id": paper.get("id", ""),
        "paper_title": paper.get("title", ""),
        "citation": paper.get("citation", ""),
        "source_url": paper.get("source_url", ""),
        "filename": paper.get("filename", ""),
    }


def _titles_match(left: str, right: str) -> bool:
    """Loosely compare paper titles across extracted and raw forms."""
    norm_left = re.sub(r"[^a-z0-9]+", "", left.casefold())
    norm_right = re.sub(r"[^a-z0-9]+", "", right.casefold())
    return bool(norm_left and norm_right and (norm_left == norm_right or norm_left in norm_right or norm_right in norm_left))


def _node_mentioned_in_text(node: dict, text: str) -> bool:
    """Heuristic fallback for legacy nodes that predate stored source metadata."""
    label = (node.get("label") or "").strip()
    if len(label) < 3:
        return False

    if re.search(rf"(?<!\w){re.escape(label)}(?!\w)", text, re.IGNORECASE):
        return True

    label_terms = [term for term in re.split(r"[_\s-]+", node.get("id", "")) if len(term) >= 4]
    lowered = text.casefold()
    return bool(label_terms and all(term.casefold() in lowered for term in label_terms[:2]))


def enrich_graph_with_sources(graph: dict, raw_dir: Path) -> bool:
    """Backfill paper metadata and node sources from raw Markdown exports."""
    if not raw_dir.exists():
        return False

    raw_records = []
    for path in sorted(raw_dir.glob("*.md")):
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        paper = parse_paper_metadata(text, path.name)
        paper["body_text"] = text
        raw_records.append(paper)

    if not raw_records:
        return False

    changed = False

    for paper in graph.get("papers", []):
        match = next((record for record in raw_records if _titles_match(paper.get("title", ""), record["title"])), None)
        paper_id = paper.get("id") or _slugify(paper.get("title", ""))

        updated = {
            "id": paper_id,
            "title": paper.get("title", match["title"] if match else ""),
            "summary": paper.get("summary", ""),
            "source_url": paper.get("source_url", match.get("source_url", "") if match else ""),
            "citation": paper.get("citation", match.get("citation", "") if match else ""),
            "filename": paper.get("filename", match.get("filename", "") if match else ""),
        }

        if paper != updated:
            paper.clear()
            paper.update(updated)
            changed = True

    paper_lookup = {
        (paper.get("id") or _slugify(paper.get("title", ""))): paper
        for paper in graph.get("papers", [])
    }

    for node in graph.get("nodes", []):
        existing_sources = node.get("sources") or []
        normalized_sources = []
        seen_paper_ids = set()

        for source in existing_sources:
            paper_id = source.get("paper_id") or _slugify(source.get("paper_title", ""))
            paper = paper_lookup.get(paper_id, {})
            normalized = {
                "paper_id": paper_id,
                "paper_title": source.get("paper_title") or paper.get("title", ""),
                "citation": source.get("citation") or paper.get("citation", ""),
                "source_url": source.get("source_url") or paper.get("source_url", ""),
                "filename": source.get("filename") or paper.get("filename", ""),
            }
            if paper_id and paper_id not in seen_paper_ids:
                normalized_sources.append(normalized)
                seen_paper_ids.add(paper_id)

        if not normalized_sources:
            for record in raw_records:
                if _node_mentioned_in_text(node, record["body_text"]):
                    source_entry = _paper_source_entry(record)
                    normalized_sources.append(source_entry)
                    seen_paper_ids.add(source_entry["paper_id"])

        if node.get("sources") != normalized_sources:
            node["sources"] = normalized_sources
            changed = True

    return changed


def extract_text_from_pdf(pdf_path: str) -> str:
    """Extract text from PDF using PyMuPDF."""
    import fitz  # PyMuPDF
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()
    return text


def _parse_json(raw: str) -> dict:
    """Robustly extract JSON from a model response."""
    raw = raw.strip()
    # Try markdown code fence first
    fence_match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', raw)
    if fence_match:
        raw = fence_match.group(1).strip()
    else:
        # Find outermost { ... } block in case there's preamble text
        start = raw.find('{')
        end = raw.rfind('}')
        if start != -1 and end != -1 and end > start:
            raw = raw[start:end + 1]
    return json.loads(raw)


def extract_knowledge(text: str, max_chars: int = 80000) -> dict:
    """Step 1: extract graph structure (nodes + edges) from paper text."""
    if len(text) > max_chars:
        half = max_chars // 2
        text = text[:half] + "\n\n[...middle truncated...]\n\n" + text[-half:]

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=16000,
        messages=[{
            "role": "user",
            "content": GRAPH_EXTRACTION_PROMPT + text
        }]
    )

    return _parse_json(response.content[0].text)


def generate_wiki_pages(nodes: list, paper_title: str, paper_summary: str) -> dict:
    """Step 2: generate wiki content for each node in a single batched call."""
    if not nodes:
        return {}

    # Build a single prompt asking for all wiki pages at once, but as a compact JSON map
    node_list = "\n".join(
        f'- id="{n["id"]}" label="{n["label"]}" type="{n["type"]}" desc="{n["description"]}"'
        for n in nodes
    )

    prompt = f"""Write a short wiki paragraph (3-5 sentences) for each of the following concepts from the paper "{paper_title}".

Paper summary: {paper_summary}

Concepts:
{node_list}

Respond with ONLY valid JSON mapping each id to its wiki paragraph:
{{"node_id": "wiki paragraph text", ...}}

No markdown fences. Just the JSON object."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=8192,
        messages=[{"role": "user", "content": prompt}]
    )

    try:
        return _parse_json(response.content[0].text)
    except Exception:
        return {}


def merge_into_graph(new_data: dict, graph_path: Path, paper: dict | None = None) -> dict:
    """Merge newly extracted nodes/edges into the persistent graph."""
    if graph_path.exists():
        with open(graph_path) as f:
            graph = json.load(f)
    else:
        graph = {"nodes": [], "edges": [], "papers": []}

    existing_node_ids = {n["id"] for n in graph["nodes"]}
    existing_edge_keys = {
        (e["source"], e["target"], e["relation"]) for e in graph["edges"]
    }
    paper = paper or {
        "id": _slugify(new_data.get("paper_title", "Unknown")),
        "title": new_data.get("paper_title", "Unknown"),
        "summary": new_data.get("paper_summary", ""),
        "source_url": "",
        "citation": new_data.get("paper_title", "Unknown"),
        "filename": "",
    }
    source_entry = _paper_source_entry(paper)

    paper_index = {
        (p.get("id") or _slugify(p.get("title", ""))): i
        for i, p in enumerate(graph["papers"])
    }
    if paper["id"] in paper_index:
        existing_paper = graph["papers"][paper_index[paper["id"]]]
        for key, value in paper.items():
            if value:
                existing_paper[key] = value
    else:
        graph["papers"].append(paper)

    for node in new_data["nodes"]:
        if node["id"] in existing_node_ids:
            for i, n in enumerate(graph["nodes"]):
                if n["id"] == node["id"]:
                    graph["nodes"][i]["description"] = node["description"]
                    if node.get("wiki"):
                        graph["nodes"][i]["wiki"] = node["wiki"]
                    existing_sources = graph["nodes"][i].get("sources") or []
                    existing_source_ids = {s.get("paper_id") for s in existing_sources}
                    if source_entry["paper_id"] not in existing_source_ids:
                        existing_sources.append(source_entry)
                    graph["nodes"][i]["sources"] = existing_sources
                    break
        else:
            node["sources"] = [source_entry]
            graph["nodes"].append(node)
            existing_node_ids.add(node["id"])

    for edge in new_data["edges"]:
        key = (edge["source"], edge["target"], edge["relation"])
        if key not in existing_edge_keys:
            if edge["source"] in existing_node_ids and edge["target"] in existing_node_ids:
                graph["edges"].append(edge)
                existing_edge_keys.add(key)

    return graph


def save_wiki_pages(nodes: list, wiki_dir: Path):
    """Save/update wiki markdown files for each node."""
    wiki_dir.mkdir(exist_ok=True)
    for node in nodes:
        filename = f"{node['id']}.md"
        filepath = wiki_dir / filename
        wiki_body = node.get("wiki", "_No wiki content yet._")
        content = f"""---
id: {node['id']}
label: {node['label']}
type: {node['type']}
---

# {node['label']}

**Type:** {node['type']}

{node['description']}

---

{wiki_body}
"""
        with open(filepath, "w") as f:
            f.write(content)


def update_index(graph: dict, data_dir: Path):
    """Update index.md with current graph state."""
    lines = ["# Wiki Index\n"]
    lines.append(f"**{len(graph['nodes'])} concepts** | **{len(graph['edges'])} relationships** | **{len(graph['papers'])} papers**\n\n")

    by_type: dict = {}
    for node in graph["nodes"]:
        t = node.get("type", "concept")
        by_type.setdefault(t, []).append(node)

    for typ, nodes in sorted(by_type.items()):
        lines.append(f"## {typ.capitalize()}s\n")
        for n in sorted(nodes, key=lambda x: x["label"]):
            lines.append(f"- [{n['label']}](wiki/{n['id']}.md) — {n['description'][:80]}...\n")
        lines.append("\n")

    lines.append("## Papers Ingested\n")
    for p in graph["papers"]:
        lines.append(f"- **{p['title']}** — {p['summary'][:100]}...\n")

    with open(data_dir / "index.md", "w") as f:
        f.writelines(lines)


def append_log(entry: str, data_dir: Path):
    """Append an entry to the log file."""
    from datetime import datetime
    log_path = data_dir / "log.md"
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    with open(log_path, "a") as f:
        f.write(f"\n## [{timestamp}] {entry}\n")
