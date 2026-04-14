# LLM Wiki

LLM Wiki is a small local research knowledge graph app. It ingests paper notes exported as Markdown, extracts concepts and relationships with an LLM, builds a graph, and generates per-node wiki pages you can browse in the frontend.

This project is inspired by Andrej Karpathy's [`llm-wiki.md` gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

The intended paper-ingestion workflow is:

1. Open an arXiv paper page in Chrome.
2. Use the Obsidian Web Clipper extension to clip the page.
3. Download the clipped result as a `.md` file.
4. Upload that `.md` file in the LLM Wiki frontend.

## Requirements

- Python 3.11+
- Node.js 18+
- npm
- An Anthropic API key

## Install

Create a Python environment and install the backend dependencies:

```bash
cd /path/to/llmwiki
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi "uvicorn[standard]" python-multipart anthropic pymupdf
```

Install the frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

## Run

Export your Anthropic key:

```bash
export ANTHROPIC_API_KEY=your-key-here
```

Start the app:

```bash
./start.sh
```

Then open:

```text
http://localhost:8000
```

`start.sh` will rebuild the frontend automatically if `frontend/src` is newer than `frontend/dist`.

## Feed Papers

The frontend currently expects Markdown uploads, not direct PDF uploads.

Recommended workflow:

1. Open the paper's arXiv page in Chrome.
2. Use Obsidian Web Clipper to clip the page into Markdown.
3. Download the generated `.md` file from the extension.
4. Open the LLM Wiki web app.
5. Click `+ Upload Paper` or drag the `.md` file into the upload area.
6. Wait for ingestion to finish.
7. Explore the generated graph and node wiki pages.

## Frontend Graph View

The frontend renders the knowledge graph as an interactive force-directed canvas.

- `Fit` resets the graph to a centered overview state and keeps node labels visible.
- `Viewport Fill` changes how much of the graph pane the full graph overview occupies.
- `Spread` changes the spacing between graph regions and clusters.
- `+` / `-`, mouse wheel, and drag let you zoom and pan the graph manually.
- Node size is proportional to graph connectivity, so highly connected nodes appear larger.
- Labels stay visible at a minimum readable size when zooming out, and selected nodes use larger labels.
- Clicking a node opens its wiki page, metadata, sources, and related concepts in the right sidebar.
- Clicking a node type opens the list of all nodes of that type in the sidebar.

## Data Layout

- `data/raw/`: raw uploaded paper sources
- `data/graph.json`: persistent graph data
- `data/wiki/`: generated wiki pages for graph nodes
- `backend/`: FastAPI backend and graph extraction logic
- `frontend/`: React frontend

## Notes

- The ingest endpoint accepts `.md` files.
- The backend serves the built frontend from `frontend/dist`.
- Uploaded paper sources are stored locally in `data/raw/`.

## License

This repository is released under the MIT License. See [LICENSE](./LICENSE).
