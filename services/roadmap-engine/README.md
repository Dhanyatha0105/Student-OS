# 🗺️ Roadmap Engine — The Atlas

> **Pillar 1: Career Roadmap Engine**
> AI-generated, personalized, graph-based career roadmaps

## What This Service Does

- Takes a student's current state (year, branch, CGPA, skills, interests)
- Takes their career goal ("Microsoft SDE Intern by 3rd year end")
- Generates a personalized node/graph-based roadmap
- Stores roadmaps as directed acyclic graphs (DAGs) in Neo4j
- Adapts dynamically: low CGPA → alternative routes, missing skills → highlights them
- Each node links to Study Engine resources, Opportunity Radar events, and Social Layer peers

## Key Responsibilities

| Area | Details |
|------|---------|
| **Roadmap Generation** | LLM-powered personalization from templates + student context |
| **Graph Storage** | Neo4j for DAG storage, traversal, and relationship queries |
| **Skill Gap Analysis** | Compare student's current skills vs. roadmap requirements |
| **Alternative Paths** | Generate 2-3 alternative routes for resilience |
| **Timeline Fitting** | Distribute nodes across available time |
| **Adaptation** | Re-generate roadmap when student context changes |

## API Endpoints (Planned)

```
POST   /api/roadmaps              — Create roadmap (triggers AI generation)
GET    /api/roadmaps/:id          — Get full roadmap graph
GET    /api/roadmaps/my           — Get user's roadmaps
PATCH  /api/roadmaps/:id          — Update roadmap metadata
POST   /api/roadmaps/:id/nodes/:nodeId/complete — Mark node complete
POST   /api/roadmaps/:id/adapt    — Request roadmap adaptation
GET    /api/roadmaps/templates    — Get template roadmaps
GET    /api/roadmaps/:id/peers    — Get users on similar roadmaps
```

## Tech Stack

- **Runtime:** Node.js (Fastify) or Python (FastAPI)
- **Graph DB:** Neo4j
- **AI:** Google Gemini API
- **Shared Types:** `@student-os/shared`

## Status

🔴 **Not started** — This is a service stub. Implementation begins in Phase 2 (Weeks 13-20).
