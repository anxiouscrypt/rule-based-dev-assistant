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

## Rule Engine

The rule engine performs four steps:

1. Normalize input by lowercasing and trimming punctuation.
2. Match keyword groups to known intents.
3. Extract the entity name after intent keywords.
4. Render a template with the matched intent and entity.

## Supported Intents

- FastAPI endpoint
- React component
- README section
- `.env.example`
- GitHub issue template
- Pytest skeleton

## Tradeoffs

Deterministic rules are predictable and free, but they require explicit coverage. Unsupported commands should fail clearly instead of pretending to understand everything.
