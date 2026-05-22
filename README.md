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

Setup instructions will be completed with the MVP.
