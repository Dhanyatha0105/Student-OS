# 🤖 AI Orchestrator

> **Central LLM service shared by all pillars**

## What This Service Does

- Centralized gateway to AI/LLM APIs (Gemini primary, OpenAI fallback)
- Manages prompt templates, token budgets, and model selection
- Provides caching layer for repeated/similar AI requests
- Handles rate limiting and cost tracking
- Used by: Study Engine, Roadmap Engine, Resume Service, Opportunity Radar

## Responsibilities

| Function | Details |
|----------|---------|
| **Model Selection** | Gemini Flash for routine tasks, Gemini Pro/GPT-4o for complex generation |
| **Caching** | Hash-based deduplication — same input = cached output |
| **Rate Limiting** | Per-user and per-service rate limits |
| **Cost Tracking** | Token usage tracking per user and per service |
| **Prompt Management** | Versioned prompt templates for each use case |
| **Fallback Chain** | Gemini → OpenAI → graceful degradation |

## Status

🔴 **Not started** — Will be built alongside Study Engine (Phase 1).
