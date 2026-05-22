# Decisions

## No LLM Dependency

The project intentionally explores assistant-style workflows through deterministic rules and templates rather than paid AI APIs.

## Frontend-Only MVP

The assistant does not need a backend to prove the core workflow. Everything runs locally in the browser.

## Command Palette UX

A command palette fits structured developer tasks better than a chatbot for this deterministic MVP.

## Clear Unsupported State

Unsupported commands should return a useful unsupported state rather than a weak or hallucinated template. That makes the deterministic boundary honest.

## Templates as Product Surface

The generated snippets are the product. Templates should be readable, copy-ready, and small enough for developers to adapt quickly.
