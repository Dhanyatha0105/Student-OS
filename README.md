# Student OS 🎓

> **Instagram is for creators. LinkedIn is for professionals. Student OS is for students.**

A graph/map-based social platform where every student's academic and career journey is visualized as an interactive roadmap — and every feature of the platform feeds into making that roadmap actionable.

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [01 - Vision](docs/01-VISION.md) | The big picture — what we're building and why |
| [02 - Market Analysis](docs/02-MARKET-ANALYSIS.md) | Competitive landscape, risks, and viability assessment |
| [03 - Product Architecture](docs/03-PRODUCT-ARCHITECTURE.md) | System design, data models, and integration plan |
| [04 - Technical Spec](docs/04-TECHNICAL-SPEC.md) | AI pipelines, database schemas, API design |
| [05 - Development Roadmap](docs/05-DEVELOPMENT-ROADMAP.md) | Phase-by-phase execution plan with timelines |
| [06 - Competitive Matrix](docs/06-COMPETITIVE-MATRIX.md) | Feature comparison with competitors |
| [Design Guide](docs/DESIGN-GUIDE.md) | UI/UX principles and design tokens |

---

## 🏗 The Five Pillars

1. **Career Roadmap Engine (The Atlas)** — AI-generated, personalized, graph-based career roadmaps
2. **AI Study Engine** — Upload notes → Get mindmaps, audio, video, flashcards, quizzes
3. **Opportunity Radar** — Live feed of hackathons, internships, scholarships matched to your roadmap
4. **Social Layer** — Goal-based cohorts, mentorship, accountability partners
5. **Resume Builder** — Auto-populated from your journey, integrated from existing project

---

## 📁 Project Structure (Monorepo)

```
student-os/
├── docs/                              # All project documentation
│   ├── 01-VISION.md
│   ├── 02-MARKET-ANALYSIS.md
│   ├── 03-PRODUCT-ARCHITECTURE.md
│   ├── 04-TECHNICAL-SPEC.md
│   ├── 05-DEVELOPMENT-ROADMAP.md
│   ├── 06-COMPETITIVE-MATRIX.md
│   └── DESIGN-GUIDE.md
│
├── apps/                              # User-facing applications
│   ├── web/                           # Main Next.js 15 web app
│   ├── resume-builder/                # Resume builder (migrated, standalone)
│   └── mobile/                        # React Native app (future)
│
├── packages/                          # Shared code
│   ├── shared/                        # Types, utils, constants
│   ├── ui/                            # Component library + design tokens
│   └── graph-viz/                     # React Flow graph visualization
│
├── services/                          # Backend microservices
│   ├── roadmap-engine/                # Career roadmap generation (Atlas)
│   ├── study-engine/                  # AI study content generation
│   ├── opportunity-radar/             # Opportunity aggregation
│   ├── social-service/                # Social features
│   ├── resume-service/                # Resume API layer
│   ├── ai-orchestrator/               # Centralized LLM service
│   └── auth-service/                  # Authentication
│
├── infrastructure/                    # Docker, deployment configs
│   ├── docker-compose.yml
│   └── README.md
│
├── scripts/                           # Scrapers, seed data
│   ├── seed-data/
│   └── scrapers/
│
├── SKILL.md                           # Frontend design skill guide
├── turbo.json                         # Turborepo pipeline config
├── pnpm-workspace.yaml                # Workspace definition
├── tsconfig.base.json                 # Shared TypeScript config
├── package.json                       # Root package.json
└── README.md                          # This file
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend (Web)** | Next.js 15, React 19, React Flow |
| **Frontend (Mobile)** | React Native / Expo (future) |
| **Shared Packages** | TypeScript, Turborepo workspaces |
| **Backend** | Node.js (Fastify) / Python (FastAPI) |
| **Graph Database** | Neo4j |
| **Relational DB** | PostgreSQL |
| **Cache** | Redis |
| **AI** | Google Gemini, OpenAI (fallback) |
| **Infrastructure** | Docker, Vercel, Railway |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Dhanyatha0105/Student-OS.git
cd student-os

# Install dependencies
pnpm install

# Start local databases
docker compose -f infrastructure/docker-compose.yml up -d

# Start development (all apps)
pnpm dev

# Or start a specific app
pnpm dev --filter @student-os/web
pnpm dev --filter resume-builder
```

---

## 🎯 Build Order

```
Study Engine (solo value) → Roadmap Engine (solo value) → Resume Integration (existing asset)
→ Opportunity Radar (solo value) → Social Layer (needs users)
```

> **"Would a student use this feature even if they were the only user on the platform?"**

---

## 📊 Market Validation

- **370M+ students** in India alone
- **Google Career Dreamer** validates AI career exploration
- **Google NotebookLM** validates AI study material generation
- **roadmap.sh** (351K GitHub stars) validates demand for career roadmaps
- **Handshake** ($3.5B valuation) validates student career platform model
- **No platform combines** all five pillars for students

---

## 📄 License

Proprietary. All rights reserved.

---

*Built with ambition from India. 🇮🇳*
