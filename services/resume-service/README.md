# 📄 Resume Service

> **Pillar 5: Resume Builder Integration**
> API wrapper around the existing resume builder, with auto-fill from Student OS

## What This Service Does

- Wraps the existing resume builder (`apps/resume-builder/`) as a microservice API
- Auto-populates resume fields from Student OS data:
  - Completed roadmap nodes → Skills & Projects sections
  - Hackathon participations → Achievements section
  - Study completions → Certifications / Coursework
  - Cohort leadership → Leadership section
- Serves as the "output" of the entire Student OS journey

## Integration with Resume Builder

The full resume builder lives at `apps/resume-builder/` and can run independently. This service provides additional APIs for platform integration:

```
Data Bridge:
  Completed Skill Nodes    → Skills Section
  Project Nodes            → Projects Section
  Hackathon Participations → Achievements Section
  Study Engine Completions → Certifications / Coursework
  Cohort Leadership        → Leadership Section
  User Profile             → Personal Details
```

## API Endpoints (Planned)

```
GET    /api/resume                 — Get user's resume data
POST   /api/resume                 — Create resume
PATCH  /api/resume                 — Update resume
POST   /api/resume/auto-fill       — Auto-populate from platform data
POST   /api/resume/export          — Export to PDF/DOCX
GET    /api/resume/templates       — Available templates
```

## Status

🔴 **Not started** — Implementation begins in Phase 3 (Weeks 21-24). Uses existing resume builder asset.
