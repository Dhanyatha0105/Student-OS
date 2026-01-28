# Student OS — Development Roadmap & Execution Plan

**Date:** March 11, 2026  
**Version:** 1.0

---

## Development Phases — Detailed Breakdown

---

## Phase 0: Foundation (Weeks 1-4)
**Goal:** Solid engineering foundation. Nothing user-facing yet.

### Week 1-2: Project Setup
- [ ] Initialize monorepo (Turborepo)
- [ ] Set up Next.js web app with App Router
- [ ] Set up shared packages (types, UI components)
- [ ] Configure ESLint, Prettier, TypeScript strict mode
- [ ] Set up PostgreSQL database + Prisma ORM
- [ ] Set up Neo4j instance (Docker for dev)
- [ ] Set up Redis instance
- [ ] GitHub repo with branch protection
- [ ] CI/CD with GitHub Actions (lint, type-check, test)

### Week 3-4: Auth & User System
- [ ] Auth system (NextAuth.js or Clerk)
- [ ] Google OAuth integration
- [ ] Email/password auth
- [ ] College email verification flow
- [ ] User profile model (college, branch, year, CGPA, skills)
- [ ] Basic profile CRUD API
- [ ] Basic profile UI (edit profile page)

### Deliverable: Running app with auth, basic profiles

---

## Phase 1: AI Study Engine MVP (Weeks 5-12)
**Goal:** Ship the feature that provides solo value. Get first 100 users.

### Week 5-6: File Upload & Processing
- [ ] File upload UI (drag & drop, paste)
- [ ] S3/R2 file storage integration
- [ ] PDF text extraction (pdf-parse library)
- [ ] Image OCR (Google Cloud Vision or Tesseract.js)
- [ ] Text chunking & preprocessing pipeline
- [ ] "My Materials" dashboard

### Week 7-8: Mindmap Generation
- [ ] Gemini API integration (AI service)
- [ ] Prompt engineering for concept extraction
- [ ] JSON graph output parsing
- [ ] React Flow integration for mindmap visualization
- [ ] Interactive mindmap UI (zoom, pan, click nodes for details)
- [ ] Save & load mindmaps

### Week 9-10: Audio & Flashcards
- [ ] LLM summarization pipeline
- [ ] TTS integration (Google Cloud TTS)
- [ ] Audio player UI component
- [ ] Flashcard generation pipeline
- [ ] Flashcard UI with flip animation
- [ ] Spaced repetition scheduler (SM-2 algorithm)

### Week 11-12: Progress Tracking & Polish
- [ ] Study progress tracker (checklist per material)
- [ ] Topic completion tracking
- [ ] Dashboard showing study stats
- [ ] UI polish and responsive design
- [ ] Error handling and edge cases
- [ ] Performance optimization
- [ ] **Beta launch at 1-2 colleges**

### Deliverable: Working Study Engine with mindmaps, audio, flashcards

---

## Phase 2: Career Roadmap Engine (Weeks 13-20)
**Goal:** The core differentiator. Personalized, visual career roadmaps.

### Week 13-14: Goal Input & Template System
- [ ] Career goal input wizard UI
- [ ] Goal categories (SDE, Data Science, Product, Design, MBA, Civil Services, etc.)
- [ ] Template roadmap data (manually curated for top 10 career goals)
- [ ] Template storage in Neo4j
- [ ] Template browsing & preview UI

### Week 15-17: AI Roadmap Generation
- [ ] LLM-powered roadmap personalization
- [ ] Student profile + goal → personalized graph
- [ ] Skill gap analysis
- [ ] Timeline fitting algorithm
- [ ] Alternative path generation
- [ ] Neo4j graph storage for generated roadmaps

### Week 18-20: Interactive Roadmap UI
- [ ] React Flow based roadmap visualization
- [ ] Node interactions (click for details, resources, actions)
- [ ] Progress marking (complete/in-progress/not-started)
- [ ] Color coding by status
- [ ] Zoom levels (overview vs. detailed)
- [ ] Connect roadmap nodes to Study Engine ("Learn this skill" → relevant study materials)
- [ ] Basic "adapt roadmap" feature (re-generate based on updated profile)

### Deliverable: Working Roadmap Engine with visual graph UI

---

## Phase 3: Resume Builder Integration (Weeks 21-24)
**Goal:** Connect existing resume builder as a platform feature.

### Week 21-22: Migration & API
- [ ] Audit existing resume builder code at `apps/resume-builder`
- [ ] Extract core rendering/template logic
- [ ] Create Resume Service API
- [ ] Set up resume data model in PostgreSQL
- [ ] Resume CRUD operations

### Week 23-24: Auto-Fill & Integration
- [ ] "Auto-fill from Student OS" feature
- [ ] Map platform data → resume sections
- [ ] PDF export
- [ ] Embed resume builder in Student OS web app
- [ ] "Share resume" link generation

### Deliverable: Resume builder integrated, auto-populates from platform

---

## Phase 4: Opportunity Radar (Weeks 25-30)
**Goal:** Surface relevant opportunities tied to roadmap.

### Week 25-27: Data Ingestion
- [ ] Web scrapers for: Unstop, Devfolio, Internshala, HackerEarth
- [ ] Opportunity data model & storage
- [ ] Scraper scheduling (daily cron jobs)
- [ ] Deduplication logic
- [ ] Admin panel for manual opportunity curation

### Week 28-30: Recommendation & UI
- [ ] Skill matching algorithm (opportunity ↔ student profile)
- [ ] Roadmap integration (link opportunities to roadmap nodes)
- [ ] Opportunity browse/search UI
- [ ] Filters (type, deadline, skill level, remote/onsite)
- [ ] Bookmark & calendar reminders
- [ ] Push notifications for deadlines
- [ ] "Suggested for you" section on dashboard

### Deliverable: Working Opportunity Radar with personalized recommendations

---

## Phase 5: Social Layer (Weeks 31-40)
**Goal:** Add the network effect layer. Only build this after sufficient user base.

### Week 31-33: Cohorts & Matching
- [ ] Cohort auto-creation based on shared goals
- [ ] Cohort discovery & join
- [ ] Cohort dashboard (member list, aggregate progress)
- [ ] "Find peers" feature based on similar roadmaps

### Week 34-36: Communication
- [ ] Real-time messaging (WebSocket)
- [ ] DMs between users
- [ ] Cohort group chat
- [ ] Basic notification system

### Week 37-38: Activity Feed
- [ ] Milestone posts (auto-generated when nodes completed)
- [ ] Manual posts (text + optional image)
- [ ] Feed algorithm (prioritize cohort members, mentors)
- [ ] Like & comment

### Week 39-40: Mentorship & Campus
- [ ] Mentor matching (seniors with completed roadmaps)
- [ ] Mentor request & accept flow
- [ ] Campus community pages
- [ ] Campus-specific opportunity feed
- [ ] Moderation tools

### Deliverable: Full social layer with cohorts, messaging, feed

---

## Success Metrics by Phase

| Phase | Timeline | Key Metric | Target |
|-------|----------|-----------|--------|
| 0 | Weeks 1-4 | Foundation | App running, auth working |
| 1 | Weeks 5-12 | Study Engine MAU | 100 users |
| 2 | Weeks 13-20 | Roadmaps Created | 500 roadmaps |
| 3 | Weeks 21-24 | Resume Exports | 200 resumes exported |
| 4 | Weeks 25-30 | Opportunity Clicks | 1,000 opportunity click-throughs |
| 5 | Weeks 31-40 | Cohort Joiners | 500 students in cohorts |

---

## What You Need to Start (Week 1)

### Technical Setup
1. Node.js 20+ and pnpm
2. PostgreSQL (local or Railway)
3. Neo4j (Docker)
4. Redis (Docker)
5. Google Cloud account (for Gemini API, TTS, Vision)
6. Vercel account (for frontend deployment)
7. GitHub repo

### Non-Technical
1. Identify 2-3 pilot colleges (start with your own)
2. Find 5-10 beta testers (friends who'll actually use it)
3. Create a simple landing page with waitlist
4. Start documenting common career paths (manual research for initial templates)

---

## Risk Mitigation Reminders

| Risk | Mitigation |
|------|-----------|
| Over-engineering | Build MVPs. Ship. Get feedback. Iterate. |
| Feature creep | Always ask: "Does this solve the student's immediate pain?" |
| AI costs spiraling | Set hard limits. Cache aggressively. Use Flash models. |
| Low adoption | Study Engine is the hook. Make it 10x better than "just uploading to NotebookLM". |
| Burnout | This is a marathon. Sustainable pace > sprint-and-crash. |

---

## Repository Quick Reference

```
student-os/
├── docs/
│   ├── 01-VISION.md              ← The big picture
│   ├── 02-MARKET-ANALYSIS.md     ← Competitive landscape & viability
│   ├── 03-PRODUCT-ARCHITECTURE.md ← System design & integration
│   ├── 04-TECHNICAL-SPEC.md      ← AI pipelines, DB schemas, APIs
│   └── 05-DEVELOPMENT-ROADMAP.md ← This file - execution plan
└── README.md                      ← Project overview
```
