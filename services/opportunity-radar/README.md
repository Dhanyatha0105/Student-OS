# 📡 Opportunity Radar

> **Pillar 3: Opportunity Discovery**
> Live feed of hackathons, internships, scholarships matched to your roadmap

## What This Service Does

- Aggregates opportunities from: Unstop, Devfolio, HackerEarth, Internshala, LinkedIn Jobs, GitHub Trending
- Filters by: relevance to your roadmap, skill level, deadline, location
- AI recommendations: "Based on your roadmap, apply to X hackathon in 3 weeks"
- Calendar integration and deadline notifications
- Community-sourced: students submit and upvote opportunities

## Data Sources (Scraped / API)

| Source | Type |
|--------|------|
| Unstop (D2C) | Hackathons, competitions |
| Devfolio | Hackathons |
| HackerEarth | Coding challenges |
| LinkedIn Jobs | Internships, jobs |
| Internshala | Internships |
| Government portals | Scholarships |
| GitHub Trending | Open source opportunities |

## API Endpoints (Planned)

```
GET    /api/opportunities          — List with filters
GET    /api/opportunities/:id      — Detail
GET    /api/opportunities/recommended — Personalized recommendations
POST   /api/opportunities/:id/bookmark — Bookmark
POST   /api/opportunities/submit   — User-submitted opportunity
```

## Status

🔴 **Not started** — Implementation begins in Phase 4 (Weeks 25-30).
