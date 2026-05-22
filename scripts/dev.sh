#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../frontend"
npm install
npm run dev -- --host 0.0.0.0
