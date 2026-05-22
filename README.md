# Rule-Based Dev Assistant

A no-API developer assistant that uses deterministic rules and templates to scaffold common engineering snippets.

## Problem

Developers repeat small scaffolding tasks: endpoints, components, tests, README sections, issue templates, and environment examples. This command palette turns structured commands into useful templates without requiring an LLM or paid API.

## Demo

Screenshot placeholder: `docs/screenshots/rule-based-dev-assistant.png`

## Features

- Command input and suggestion list
- Deterministic intent matching
- Entity extraction
- Template preview
- Copy output button
- Categories for FastAPI, React, README, env files, GitHub issues, and Pytest

## Architecture

Input text -> normalizer -> intent matcher -> entity extractor -> template renderer -> preview.

```txt
Command input
  -> normalize
  -> match deterministic rule
  -> extract entity
  -> render template
  -> preview and copy
```

## Tech Stack

- React, TypeScript, Vite
- Tailwind CSS
- Vitest
- No backend
- No paid AI APIs

## Local Setup

Prerequisites:

- Node.js 20 or newer

Run locally:

```bash
chmod +x scripts/dev.sh
./scripts/dev.sh
```

Manual setup:

```bash
cd frontend
npm install
npm run dev
```

Run checks:

```bash
cd frontend
npm test
npm run build
```

## Example Commands

- `create fastapi endpoint orders`
- `make react component ServiceCard`
- `generate readme for api tool`
- `create pytest for config validation`
- `make github issue for payment bug`
- `create env example for fastapi app`

## What I Learned

- Assistant-style workflows do not always need an LLM.
- Deterministic tools are strongest when their boundaries are explicit.
- Template quality matters because the generated snippet is the product surface.

## Future Improvements

See `docs/ROADMAP.md`.
