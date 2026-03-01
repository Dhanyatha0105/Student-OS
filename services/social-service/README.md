# 🤝 Social Service — The Network

> **Pillar 4: Goal-Based Social Layer**
> Connect students with shared goals, mentors, and accountability partners

## What This Service Does

- **Goal-based matching:** Connect with students who share career goals
- **Cohort system:** Auto-create groups for students on similar roadmaps
- **Mentor discovery:** Find seniors who've walked your path
- **Progress sharing:** Share roadmap milestones (not just photos/posts)
- **Accountability partners:** Opt-in mutual progress tracking
- **Campus communities:** Localized feeds for college-specific content
- **Real-time messaging:** DMs and cohort group chat (WebSocket)

## Key Difference from Other Social Networks

> This is NOT a general social network. Users come for the tools (Study Engine, Roadmap). They STAY because of the community. This is the Slack/Discord model, not the Facebook model.

## API Endpoints (Planned)

```
GET    /api/cohorts                — List cohorts
POST   /api/cohorts/:id/join      — Join cohort
GET    /api/cohorts/:id/members   — Get cohort members
GET    /api/feed                   — Personalized activity feed
POST   /api/messages               — Send message
GET    /api/messages/:userId       — Get conversation
POST   /api/mentors/request       — Request mentorship
```

## Status

🔴 **Not started** — Implementation begins in Phase 5 (Weeks 31-40). Built LAST — needs users first.
