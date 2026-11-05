#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
PYTHON_BIN="${PYTHON_BIN:-python3}"
# server.py creates/reuses the persistent Python environment itself.
exec "$PYTHON_BIN" server.py "$@"
