# 📚 Study Engine — NotebookLM on Steroids

> **Pillar 2: AI Study Engine**
> Upload notes → Get mindmaps, audio, video, flashcards, quizzes

## What This Service Does

- Students upload exam materials (PDFs, handwritten notes, slides)
- AI pipeline generates: mindmaps, audio summaries, video explanations, flashcards, practice questions
- Content organized into a study atlas with checkpoints
- Progress tracking with checklists and spaced repetition
- Community sharing: students studying the same subject see each other's materials

## AI Pipeline

```
Upload → OCR (if handwritten) → Text Extraction → Chunking → Processing

Processing branches:
├── Mindmap Generation
│   └── LLM extracts concepts + relationships → JSON graph → Frontend renders
├── Audio Summary
│   └── LLM summarizes → TTS (Google TTS) → Audio file
├── Video Explanation
│   └── LLM generates script → Animated explainer → Video file
├── Flashcards
│   └── LLM generates Q&A pairs → Spaced repetition scheduler (SM-2)
├── Practice Questions
│   └── LLM generates MCQs + short answers → Auto-grading
└── Topic Checklist
    └── LLM identifies distinct topics → Generates ordered study plan
```

## API Endpoints (Planned)

```
POST   /api/study/materials       — Upload study material
GET    /api/study/materials/:id   — Get material details
POST   /api/study/generate        — Generate content from material
GET    /api/study/content/:id     — Get generated content
PATCH  /api/study/progress/:id    — Update study progress
GET    /api/study/library         — Community shared library
```

## Cost Strategy

**Netflix model, not ChatGPT model:**
- Phase 1: Pre-generate all content for target branches (MIT-B CSE/AI/DS)
- Zero marginal AI cost per user — generate once, serve thousands
- Later: unlock live AI generation as premium feature

## Status

🔴 **Not started** — This is a service stub. Implementation begins in Phase 1 (Weeks 5-12) — the **first** feature to build.
