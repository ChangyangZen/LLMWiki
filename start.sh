#!/bin/bash
# Start the LLM Wiki server
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$SCRIPT_DIR/backend"
PORT="${PORT:-8000}"

# Ensure ANTHROPIC_API_KEY is set
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "ERROR: ANTHROPIC_API_KEY environment variable is not set."
  echo "Set it with: export ANTHROPIC_API_KEY=your-key"
  exit 1
fi

# Rebuild frontend if source is newer than dist
if [ "$SCRIPT_DIR/frontend/src" -nt "$SCRIPT_DIR/frontend/dist" ] 2>/dev/null; then
  echo "Rebuilding frontend..."
  cd "$SCRIPT_DIR/frontend" && npm run build
fi

PYTHON="${VIRTUAL_ENV:+$VIRTUAL_ENV/bin/python3}"
PYTHON="${PYTHON:-python3}"

echo "Starting LLM Wiki on http://localhost:$PORT"
cd "$BACKEND_DIR"
"$PYTHON" -m uvicorn main:app --host 0.0.0.0 --port "$PORT" --reload
