# Student OS — Technical Specification

**Date:** March 11, 2026  
**Version:** 1.0

---

## 1. AI Pipeline Specifications

### 1.1 Study Engine AI Pipeline

#### Mindmap Generation
```
Input: Raw text / PDF content (chunked)
Model: Gemini 2.0 Flash (cost-efficient, fast)
Prompt Strategy:
  1. Extract main topics and subtopics
  2. Identify relationships (prerequisite, related, parent-child)
  3. Output as JSON graph: { nodes: [...], edges: [...] }
Output: JSON → Rendered via React Flow / D3.js
Latency Target: < 10 seconds for a 20-page PDF
Cost Target: < ₹2 per generation
```

#### Audio Summary
```
Input: Extracted text content
Pipeline:
  1. Gemini Flash → Condensed summary (2000 words for a 50-page doc)
  2. Summary → Google Cloud TTS or ElevenLabs
  3. Output: MP3 file (5-10 min)
Latency Target: < 60 seconds
Cost Target: < ₹5 per audio
```

#### Video Explanation (Phase 2)
```
Input: Key concepts extracted from text
Pipeline:
  1. Gemini → Script generation (narrative + visual descriptions)
  2. Script → Manim (Python animation library) for technical concepts
  3. Alternative: Slide-based video with voiceover
Output: MP4 file (3-5 min per topic)
Latency Target: < 5 minutes (async, background job)
Cost Target: < ₹10 per video
```

#### Flashcard & Quiz Generation
```
Input: Extracted text content
Model: Gemini 2.0 Flash
Output:
  - Flashcards: Array of { front: string, back: string, difficulty: 1-5 }
  - Quiz: Array of { question: string, options: string[], correct: number, explanation: string }
Spaced Repetition: SM-2 algorithm for flashcard scheduling
```

### 1.2 Roadmap Generation AI Pipeline

```
Input:
  - Student profile (year, branch, CGPA, current skills)
  - Career goal (free text, parsed into structured goal)
  - Constraints (timeline, location preference, financial constraints)

Pipeline:
  1. Goal Parsing: LLM classifies goal into categories (SDE, Data Science, MBA, Consulting, etc.)
  2. Template Matching: Retrieve best-matching roadmap template from DB
  3. Personalization: LLM adapts template based on student's specific context
  4. Gap Analysis: Compare student's current skills vs. roadmap requirements
  5. Timeline Fitting: Distribute nodes across available semesters/months
  6. Alternative Paths: Generate 2-3 alternative routes for resilience

Output: Neo4j graph with typed nodes and edges

Node Types:
  - SKILL: "Learn React", "Master DSA"
  - PROJECT: "Build a portfolio site", "Kaggle competition"
  - MILESTONE: "Complete 100 LeetCode problems"
  - APPLICATION: "Apply to Microsoft internship"
  - EVENT: "Attend HackMIT"
  - CHECKPOINT: "Semester 3 end - review progress"

Edge Types:
  - PREREQUISITE: Must complete A before B
  - RECOMMENDED: A helps with B but not required
  - ALTERNATIVE: B is an alternative to A
  - CONCURRENT: A and B can be done in parallel
```

---

## 2. Graph Database Schema (Neo4j)

```cypher
// Student node
CREATE (s:Student {
  id: $id,
  name: $name,
  college: $college,
  branch: $branch,
  year: $year,
  cgpa: $cgpa,
  skills: $skills,
  joined_at: datetime()
})

// Career Goal
CREATE (g:CareerGoal {
  id: $id,
  title: $title,          // "Microsoft SDE Intern"
  category: $category,    // "SDE", "Data Science", "MBA"
  target_company: $company,
  target_role: $role,
  target_timeline: $timeline
})

// Roadmap Node
CREATE (n:RoadmapNode {
  id: $id,
  title: $title,
  description: $description,
  type: $type,            // SKILL, PROJECT, MILESTONE, APPLICATION, EVENT
  estimated_duration: $duration,
  difficulty: $difficulty, // 1-5
  resources: $resources,   // Array of URLs
  position: point({x: $x, y: $y}) // For visualization
})

// Relationships
(s)-[:HAS_GOAL {priority: 1}]->(g)
(s)-[:ON_ROADMAP]->(r:Roadmap {id: $id, created_at: datetime()})
(r)-[:CONTAINS]->(n)
(n)-[:LEADS_TO {type: 'prerequisite'}]->(n2)
(n)-[:LEADS_TO {type: 'recommended'}]->(n3)
(s)-[:COMPLETED {completed_at: datetime()}]->(n)
(s)-[:IN_PROGRESS {started_at: datetime(), progress: 0.5}]->(n)

// Social relationships
(s1)-[:FOLLOWS]->(s2)
(s)-[:IN_COHORT]->(c:Cohort {goal: $goal, name: $name})
(s1)-[:MENTORS]->(s2)

// Opportunity connections
(o:Opportunity {title: $title, deadline: $deadline})-[:RELEVANT_TO]->(n)
(o)-[:REQUIRES]->(sk:Skill {name: $name})
```

### Key Queries

```cypher
// Get personalized roadmap with completion status
MATCH (s:Student {id: $userId})-[:ON_ROADMAP]->(r)-[:CONTAINS]->(n)
OPTIONAL MATCH (s)-[c:COMPLETED]->(n)
OPTIONAL MATCH (s)-[p:IN_PROGRESS]->(n)
RETURN n, c, p ORDER BY n.position.x

// Find students on similar paths
MATCH (s1:Student {id: $userId})-[:HAS_GOAL]->(g)<-[:HAS_GOAL]-(s2)
WHERE s1 <> s2
RETURN s2, g

// Recommend opportunities based on roadmap
MATCH (s:Student {id: $userId})-[:ON_ROADMAP]->(r)-[:CONTAINS]->(n)
WHERE NOT exists((s)-[:COMPLETED]->(n))
MATCH (o:Opportunity)-[:RELEVANT_TO]->(n)
WHERE o.deadline > datetime()
RETURN o ORDER BY o.deadline
```

---

## 3. API Design (Key Endpoints)

### Auth & User
```
POST   /api/auth/signup          — Email/Google signup
POST   /api/auth/login           — Login
POST   /api/auth/verify-college  — Verify college email
GET    /api/users/me             — Get current user profile
PATCH  /api/users/me             — Update profile
GET    /api/users/:id            — Get public profile
```

### Roadmap
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

### Study Engine
```
POST   /api/study/materials       — Upload study material
GET    /api/study/materials/:id   — Get material details
POST   /api/study/generate        — Generate content from material
         body: { materialId, type: "mindmap"|"audio"|"flashcard"|"quiz" }
GET    /api/study/content/:id     — Get generated content
PATCH  /api/study/progress/:id    — Update study progress
GET    /api/study/library         — Community shared library
```

### Opportunities
```
GET    /api/opportunities          — List (with filters: type, skill, deadline)
GET    /api/opportunities/:id      — Detail
GET    /api/opportunities/recommended — Personalized recommendations
POST   /api/opportunities/:id/bookmark — Bookmark
POST   /api/opportunities/submit   — User-submitted opportunity
```

### Social
```
GET    /api/cohorts                — List cohorts
POST   /api/cohorts/:id/join      — Join cohort
GET    /api/cohorts/:id/members   — Get cohort members
GET    /api/feed                   — Personalized activity feed
POST   /api/messages               — Send message
GET    /api/messages/:userId       — Get conversation
```

### Resume
```
GET    /api/resume                 — Get user's resume data
POST   /api/resume                 — Create resume
PATCH  /api/resume                 — Update resume
POST   /api/resume/auto-fill       — Auto-populate from platform data
POST   /api/resume/export          — Export to PDF
GET    /api/resume/templates       — Available templates
```

---

## 4. Security & Privacy

### Authentication
- JWT-based with refresh tokens
- College email verification for campus features
- OAuth (Google, GitHub) for quick signup
- Rate limiting: 100 req/min per user, 1000 req/min per IP

### Data Privacy
- Student data encrypted at rest (AES-256)
- PII handling compliant with India's DPDP Act 2023
- Study materials stored per-user, not accessible by others unless explicitly shared
- Opt-in for all social features
- Right to deletion: Student can delete all data
- Anonymization for aggregate analytics sold to recruiters

### Content Safety
- AI-generated content marked as AI-generated
- Community flagging system for incorrect study material
- Moderation pipeline for social posts

---

## 5. Performance Targets

| Operation | Target Latency | Notes |
|-----------|---------------|-------|
| Page load (web) | < 1.5s | Next.js ISR + CDN |
| API response (CRUD) | < 200ms | Redis caching |
| Roadmap generation | < 15s | Async with loading state |
| Mindmap generation | < 10s | Streaming response |
| Audio generation | < 60s | Background job, notify when ready |
| Graph visualization render | < 500ms | Client-side, WebGL for large graphs |
| Search | < 300ms | Elasticsearch |
| Real-time chat | < 100ms | WebSocket |

---

## 6. Cost Optimization Strategies

1. **LLM Caching:** Cache identical/similar requests. "Data Structures Mindmap" for the same uploaded PDF should be generated once.
2. **Community Content Pool:** If Student A generates a mindmap for "Operating Systems Chapter 5" and Student B uploads similar content, serve from cache (with similarity threshold > 90%).
3. **Tiered AI Models:** Use Gemini Flash for routine tasks, GPT-4o/Gemini Pro only for complex roadmap generation.
4. **Progressive Enhancement:** Generate mindmap first (cheap, fast), offer audio/video as premium or on-demand.
5. **Edge Caching:** CDN for static generated content (audio files, video files, exported PDFs).
6. **Serverless for Spiky Loads:** AI processing workers on serverless (AWS Lambda / Cloud Functions) to avoid paying for idle capacity.
