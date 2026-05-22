# Architecture

## System Components

- React command palette UI.
- Deterministic matcher for command intent and entity extraction.
- Template renderer for code and documentation snippets.
- Browser clipboard integration.

## Data Flow

```txt
Input text -> normalize -> match intent -> extract entity -> render template -> preview/copy
```

## Constraints

- No backend.
- No LLM or paid API.
- Deterministic matching only.
