# Student OS — Product Architecture & Integration Plan

**Date:** March 11, 2026  
**Version:** 1.0

---

## 1. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  Web App      │  │  Mobile App   │  │  Desktop PWA │              │
│  │  (Next.js)    │  │  (React       │  │              │              │
│  │               │  │   Native)     │  │              │              │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘              │
│         └──────────────────┼──────────────────┘                      │
│                            │                                         │
└────────────────────────────┼─────────────────────────────────────────┘
                             │ REST + WebSocket + GraphQL
┌────────────────────────────┼─────────────────────────────────────────┐
│                      API GATEWAY (Kong / AWS API Gateway)            │
│                            │                                         │
│  ┌─────────────────────────┼───────────────────────────────────────┐ │
│  │                   MICROSERVICES LAYER                            │ │
│  │                                                                  │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │ │
│  │  │  Auth &       │  │  Roadmap      │  │  Study        │          │ │
│  │  │  User Service │  │  Engine       │  │  Engine       │          │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘          │ │
│  │                                                                  │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │ │
│  │  │  Opportunity  │  │  Social       │  │  Resume       │          │ │
│  │  │  Radar        │  │  Service      │  │  Service      │          │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘          │ │
│  │                                                                  │ │
│  │  ┌──────────────┐  ┌──────────────┐                             │ │
│  │  │  AI / LLM     │  │  Notification │                             │ │
│  │  │  Orchestrator │  │  Service      │                             │ │
│  │  └──────────────┘  └──────────────┘                             │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
                             │
┌────────────────────────────┼─────────────────────────────────────────┐
│                       DATA LAYER                                     │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  PostgreSQL   │  │  Neo4j        │  │  Redis        │              │
│  │  (Users,      │  │  (Graph DB    │  │  (Cache,      │              │
│  │   Content)    │  │   Roadmaps,   │  │   Sessions)   │              │
│  │               │  │   Relations)  │  │               │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  S3 / R2      │  │  Elasticsearch│  │  Message Queue│              │
│  │  (File        │  │  (Search)     │  │  (RabbitMQ /  │              │
│  │   Storage)    │  │               │  │   Kafka)      │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 2. Data Model (Core Entities)

### Graph Model (Neo4j) — The Heart of the Platform

```
(:Student)-[:HAS_GOAL]->(:CareerGoal)
(:Student)-[:ON_ROADMAP]->(:Roadmap)
(:Roadmap)-[:CONTAINS]->(:Node)
(:Node)-[:REQUIRES]->(:Skill)
(:Node)-[:LEADS_TO]->(:Node)
(:Node)-[:COMPLETED_BY]->(:Student)
(:Student)-[:KNOWS]->(:Skill)
(:Student)-[:IN_COHORT]->(:Cohort)
(:Student)-[:FOLLOWS]->(:Student)
(:Opportunity)-[:REQUIRES]->(:Skill)
(:Opportunity)-[:RELEVANT_TO]->(:Node)
(:StudyMaterial)-[:COVERS]->(:Topic)
(:Topic)-[:PART_OF]->(:Subject)
(:Subject)-[:REQUIRED_FOR]->(:Node)
```

### Relational Model (PostgreSQL) — Structured Data

```sql
-- Core user data
users (id, email, name, college, branch, year, cgpa, created_at)
user_profiles (user_id, bio, avatar_url, skills[], interests[])

-- Study Engine
study_materials (id, user_id, title, file_url, subject, upload_date)
generated_content (id, material_id, type [mindmap|audio|video|flashcard|quiz], content_url, metadata)
study_progress (id, user_id, material_id, checklist_json, percent_complete)

-- Opportunities
opportunities (id, title, type, org, deadline, url, skills[], source)
opportunity_bookmarks (user_id, opportunity_id)

-- Social
posts (id, user_id, content, roadmap_node_id, created_at)
messages (id, sender_id, receiver_id, content, created_at)
cohorts (id, name, goal, member_count)
cohort_members (cohort_id, user_id, joined_at)

-- Resume
resumes (user_id, template_id, data_json, last_updated)
```

---

## 3. Service-by-Service Design

### 3A. Roadmap Engine

**Purpose:** Generate, store, and manage personalized career roadmaps.

**Key Endpoints:**
```
POST   /api/roadmap/generate     — Generate roadmap from student profile + goal
GET    /api/roadmap/:id          — Get roadmap with nodes
PATCH  /api/roadmap/:id/node/:nodeId  — Mark node complete / update progress
GET    /api/roadmap/:id/alternatives  — Get alternative paths
GET    /api/roadmap/templates    — Get popular pre-built roadmaps
POST   /api/roadmap/:id/adapt    — Re-generate based on changed circumstances
```

**How It Works:**
1. Student inputs: current state (year, branch, CGPA, skills) + goal
2. System queries graph DB for similar successful paths (from existing user data)
3. LLM generates personalized roadmap incorporating:
   - Industry requirements (scraped job descriptions)
   - Historical success patterns (from user data)
   - Time constraints (years remaining)
   - Skill gaps (current vs required)
4. Roadmap stored as a directed acyclic graph (DAG) in Neo4j
5. Frontend renders as an interactive node map (using D3.js or React Flow)

**Adaptation Logic:**
```
IF student.cgpa < required_threshold:
    → Inject "CGPA improvement" node OR
    → Show alternative path bypassing CGPA-dependent opportunities
    → Surface compensating strategies (stronger projects, open source contributions)

IF student.skills ∩ required_skills < 50%:
    → Front-load skill acquisition nodes
    → Link each skill node to Study Engine resources

IF deadline is approaching:
    → Compress timeline
    → Prioritize highest-impact actions
    → Alert student with "critical path" view
```

### 3B. AI Study Engine

**Purpose:** Transform uploaded study materials into multi-format learning content.

**Key Endpoints:**
```
POST   /api/study/upload         — Upload study material (PDF, images, text)
POST   /api/study/:id/generate   — Generate content (mindmap/audio/video/flashcard/quiz)
GET    /api/study/:id/content    — Get generated content
PATCH  /api/study/:id/progress   — Update study progress
GET    /api/study/subjects       — Get subjects being studied (for social matching)
```

**AI Pipeline:**
```
Upload → OCR (if handwritten) → Text Extraction → Chunking → Processing

Processing branches:
├── Mindmap Generation
│   └── LLM extracts concepts + relationships → JSON graph → Frontend renders
├── Audio Summary
│   └── LLM summarizes → TTS (ElevenLabs / Google TTS) → Audio file
├── Video Explanation
│   └── LLM generates script → Animated explainer (Manim-style) → Video file
├── Flashcards
│   └── LLM generates Q&A pairs → Spaced repetition scheduler
├── Practice Questions
│   └── LLM generates MCQs + short answers → Auto-grading
└── Topic Checklist
    └── LLM identifies distinct topics → Generates ordered study plan
```

**Caching Strategy:**
- Hash uploaded content → Check if similar material already processed
- Cache generated content per subject (e.g., "OS Process Scheduling" → shared across students)
- Community library: Opt-in sharing of generated study materials

### 3C. Opportunity Radar

**Purpose:** Aggregate and recommend opportunities relevant to the student's roadmap.

**Data Sources (Scraped / API):**
- Unstop (formerly D2C)
- Devfolio
- HackerEarth
- LinkedIn Jobs
- Internshala
- College placement portals
- Government scholarship portals
- GitHub trending (for open source opportunities)

**Recommendation Engine:**
```
student_skills ∪ roadmap_required_skills → match against opportunity_required_skills
relevance_score = skill_match * recency * deadline_proximity * difficulty_match
```

### 3D. Social Service

**Purpose:** Connect students with shared goals.

**Features:**
- Goal-based cohort auto-creation
- DMs and group chat
- Progress feed (milestone posts auto-generated from roadmap progress)
- Mentor matching (senior students with completed similar roadmaps)
- Study group formation (based on shared uploaded subjects)
- Campus-specific feeds

### 3E. Resume Service

**Purpose:** Integrate existing resume builder as a pillar of Student OS.

**Integration Plan with `apps/resume-builder`:**
1. Wrap existing resume builder as a microservice
2. Add API layer for data exchange with main platform
3. Auto-populate resume fields from:
   - Completed roadmap nodes (projects, skills)
   - Hackathon participations (from Opportunity Radar)
   - Study achievements (courses completed)
   - Social proof (mentor endorsements, cohort activity)
4. Add Student OS profile page that acts as a living resume

---

## 4. Tech Stack Recommendation

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend (Web)** | Next.js 15 + React | SSR for SEO, app router, React ecosystem |
| **Frontend (Mobile)** | React Native / Expo | Code sharing with web, fast iteration |
| **Graph Visualization** | React Flow / D3.js | Interactive node-based UIs |
| **Backend Framework** | Node.js (Fastify) or Python (FastAPI) | Fast, async, good for AI integration |
| **Graph Database** | Neo4j | Natural fit for roadmaps, relationships, recommendations |
| **Relational DB** | PostgreSQL | Structured data, mature, reliable |
| **Cache** | Redis | Session management, caching, rate limiting |
| **Search** | Elasticsearch / Meilisearch | Full-text search for opportunities, content |
| **File Storage** | AWS S3 / Cloudflare R2 | Study materials, generated content |
| **AI/LLM** | Google Gemini API (primary) + OpenAI (fallback) | Gemini for cost efficiency, GPT-4 for quality tasks |
| **TTS** | Google Cloud TTS / ElevenLabs | Audio summary generation |
| **Video Generation** | Manim (programmatic) / HeyGen (AI) | Animated explanations |
| **Message Queue** | RabbitMQ / BullMQ | Async processing for AI tasks |
| **Auth** | Clerk / NextAuth.js | Easy social login, college email verification |
| **Deployment** | Vercel (frontend) + Railway/Render (backend) | Start cheap, scale later |
| **CI/CD** | GitHub Actions | Free, integrated |

---

## 5. Integration Architecture — How Everything Connects

```
┌─────────────────────────────────────────────────────────┐
│                 STUDENT INTERACTION FLOW                  │
│                                                           │
│  1. Student signs up → Creates profile                   │
│  2. Sets career goal                                     │
│                    ↓                                      │
│  3. ROADMAP ENGINE generates personalized graph          │
│                    ↓                                      │
│  4. Each node links to:                                  │
│     ├── Study Engine (for skill acquisition)             │
│     ├── Opportunity Radar (for real-world action)        │
│     └── Social Layer (for peer connection)               │
│                    ↓                                      │
│  5. Student uploads exam material → Study Engine         │
│     processes → Generates learning content               │
│                    ↓                                      │
│  6. As student completes nodes:                          │
│     ├── Resume Builder auto-updates                      │
│     ├── Social feed shows milestone                      │
│     └── Roadmap adapts remaining path                    │
│                    ↓                                      │
│  7. Cohort members see each other's progress             │
│  8. Opportunity Radar pushes relevant deadlines          │
│  9. Resume is always current and exportable              │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Resume Builder Integration Details

### Current State (assumed based on common patterns)
The existing resume builder at `apps/resume-builder` is a standalone application.

### Integration Steps:
1. **Extract Core Logic:** Identify the resume template rendering engine, data model, and export functionality
2. **Create Resume API:**
   ```
   POST   /api/resume/create        — Create new resume
   GET    /api/resume/:id           — Get resume data
   PATCH  /api/resume/:id           — Update resume data
   POST   /api/resume/:id/export    — Export to PDF
   POST   /api/resume/:id/auto-fill — Auto-fill from Student OS profile
   GET    /api/resume/templates     — Get available templates
   ```
3. **Data Bridge:** Build a sync layer that maps Student OS entities to resume fields:
   ```
   Completed Skill Nodes → Skills Section
   Project Nodes → Projects Section
   Hackathon Participations → Achievements Section
   Study Engine Completions → Certifications / Coursework
   Cohort Leadership → Leadership Section
   User Profile → Personal Details
   ```
4. **Embed in Platform:** Resume builder becomes a section within the Student OS web app, not a separate site

---

## 7. Development Phases & Timeline

### Phase 0: Foundation (Weeks 1-4)
- Set up monorepo with turborepo/nx
- Database schemas (PostgreSQL + Neo4j)
- Auth system
- Basic user profiles
- CI/CD pipeline

### Phase 1: Study Engine MVP (Weeks 5-12)
- File upload (PDF, images)
- OCR pipeline
- Mindmap generation (LLM + graph visualization)
- Audio summary generation (LLM + TTS)
- Flashcard generation
- Basic study progress tracking
- **Ship to first 100 users at 1 college**

### Phase 2: Roadmap Engine MVP (Weeks 13-20)
- Goal input UI
- Roadmap generation (LLM + template hybrid)
- Interactive graph UI (React Flow)
- Basic skill-gap analysis
- Template roadmaps for common goals (SDE, Data Science, MBA, etc.)
- Connect roadmap nodes to Study Engine

### Phase 3: Resume Integration (Weeks 21-24)
- Port existing resume builder into platform
- Auto-populate from roadmap data
- PDF export

### Phase 4: Opportunity Radar (Weeks 25-30)
- Scrapers for major opportunity platforms
- Recommendation engine
- Calendar integration
- Deadline notifications

### Phase 5: Social Layer (Weeks 31-40)
- Cohort system
- DMs and group chat
- Progress feed
- Mentor matching
- Campus communities

---

## 8. File Structure (Monorepo)

```
student-os/
├── docs/                         # Project documentation (you are here)
│   ├── 01-VISION.md
│   ├── 02-MARKET-ANALYSIS.md
│   ├── 03-PRODUCT-ARCHITECTURE.md
│   ├── 04-TECHNICAL-SPEC.md
│   └── 05-DEVELOPMENT-ROADMAP.md
├── apps/
│   ├── web/                      # Next.js web application
│   │   ├── src/
│   │   │   ├── app/              # App router pages
│   │   │   ├── components/       # React components
│   │   │   ├── lib/              # Utilities
│   │   │   └── styles/           # Global styles
│   │   └── package.json
│   ├── mobile/                   # React Native app (future)
│   └── resume-builder/           # Migrated from apps/resume-builder
├── packages/
│   ├── shared/                   # Shared types, utils
│   ├── ui/                       # Shared UI component library
│   └── graph-viz/                # Graph visualization components
├── services/
│   ├── api-gateway/              # API gateway
│   ├── auth-service/             # Authentication
│   ├── roadmap-service/          # Roadmap engine
│   ├── study-service/            # Study engine
│   ├── opportunity-service/      # Opportunity radar
│   ├── social-service/           # Social features
│   ├── resume-service/           # Resume builder API
│   ├── ai-service/               # LLM orchestration
│   └── notification-service/     # Push/email notifications
├── infrastructure/
│   ├── docker-compose.yml
│   ├── terraform/                # IaC (future)
│   └── k8s/                      # Kubernetes configs (future)
├── scripts/
│   ├── seed-data/                # Seed roadmap templates
│   └── scrapers/                 # Opportunity scrapers
├── turbo.json                    # Turborepo config
├── package.json                  # Root package.json
└── README.md
```
