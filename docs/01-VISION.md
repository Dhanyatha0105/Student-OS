# Student OS — Vision Document

**Project Name:** Student OS (working title: "Atlas")  
**Author:** Dhanyatha Corry  
**Date:** March 11, 2026  
**Version:** 1.0

---

## The One-Liner

> **Instagram is for creators. LinkedIn is for professionals. Student OS is for students.**

---

## The Problem (No BS)

Every student in India (and globally) is individually reinventing the wheel:

1. **Information is scattered.** A student wanting a Microsoft internship must piece together advice from YouTube, Reddit, LinkedIn, seniors, college placement cells, random blogs — none of it personalized, none of it structured, all of it contradictory.

2. **No single platform owns the student journey.** LinkedIn doesn't care about you until you graduate. Instagram is entertainment. Discord/Telegram groups are chaotic. College counselors are overwhelmed.

3. **Exam prep is still medieval.** Students manually create notes, Google for explanations, hunt for videos. Google NotebookLM showed that AI can generate mindmaps, audio summaries, and video explanations from raw notes — but it's a tool, not an ecosystem.

4. **Career planning is guesswork.** Students don't know what CGPA they need, what projects to build, what hackathons to attend, what skills are actually required — and by the time they figure it out, it's often too late.

5. **No student community is goal-oriented.** Existing student groups are social, not strategic. There's no platform where students with the same career goal (e.g., "Get into Google by 4th year") can find each other, track progress together, and hold each other accountable.

---

## The Solution: Student OS

A **graph/map-based social platform** where every student's academic and career journey is visualized as an interactive roadmap — and every feature of the platform feeds into making that roadmap actionable.

### Core Metaphor: The Atlas

Your career is a map. You're at point A. Your goal is point B. Student OS shows you:
- Every possible route
- Which routes others have taken successfully
- What milestones to hit along the way
- Alternative routes if your current situation (CGPA, skills, etc.) requires detours
- Who's on a similar path and can travel with you

---

## The Five Pillars

### Pillar 1: Career Roadmap Engine (The Atlas)
- Student enters their current state (year, branch, CGPA, skills, interests)
- Student enters their goal ("Microsoft SDE Intern by 3rd year end")
- AI generates a node/graph-based roadmap: skills → projects → competitions → applications → timeline
- Roadmap adapts dynamically: low CGPA? Shows alternative routes. Missing a skill? Highlights it.
- Nodes are interactive: click a node to see resources, tutorials, seniors who completed that step
- **Differentiation from roadmap.sh:** Personalized, not generic. Social, not static. Adaptive, not one-size-fits-all.

### Pillar 2: AI Study Engine (NotebookLM on Steroids)
- Students upload exam materials (PDFs, handwritten notes, slides)
- AI generates: mindmaps, audio summaries, video explanations, flashcards, practice questions
- Content is organized into a **study atlas** with checkpoints
- Progress tracking with checklists
- Spaced repetition and smart revision scheduling
- **Key insight:** This is not just a tool — it's integrated into the social layer. Students studying the same subject can see each other's progress, share generated content, form study groups.

### Pillar 3: Opportunity Radar
- Live feed of upcoming hackathons, internships, scholarships, competitions, workshops
- Filtered by: relevance to your roadmap, your skill level, deadline, location
- Calendar integration
- Community-sourced: students can submit opportunities, upvote, review
- AI recommendations: "Based on your roadmap, you should apply to X hackathon in 3 weeks"

### Pillar 4: Social Layer (The Network)
- **Goal-based matching:** Connect with students who share your career goals
- **Mentor discovery:** Find seniors who've walked your path
- **Cohort system:** Students on similar roadmaps automatically form cohorts
- **Progress sharing:** Share roadmap milestones (not just photos/posts)
- **Accountability partners:** Opt-in system for mutual progress tracking
- **Campus communities:** Localized feeds for college-specific opportunities and events

### Pillar 5: Resume & Profile Builder (Existing Asset)
- Integrates your existing resume builder (`apps/resume-builder`)
- Auto-populates from roadmap progress
- Skills validated by platform activity (completed projects, hackathon participation)
- Exportable to PDF, shareable as a live profile link
- ATS-optimized templates

---

## How They Connect

```
                    ┌──────────────────────┐
                    │   CAREER ROADMAP     │
                    │   (The Atlas)        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
    ┌─────────▼──────┐ ┌──────▼───────┐ ┌──────▼──────────┐
    │  AI STUDY      │ │ OPPORTUNITY  │ │  SOCIAL LAYER   │
    │  ENGINE        │ │ RADAR        │ │  (Network)      │
    └─────────┬──────┘ └──────┬───────┘ └──────┬──────────┘
              │                │                │
              └────────────────┼────────────────┘
                               │
                    ┌──────────▼───────────┐
                    │  RESUME & PROFILE    │
                    │  BUILDER             │
                    └──────────────────────┘
```

- The **Roadmap** is the center. Everything feeds into it and from it.
- The **Study Engine** helps you clear the skill nodes on your roadmap.
- The **Opportunity Radar** surfaces real-world actions tied to roadmap nodes.
- The **Social Layer** connects you with people on similar roadmap paths.
- The **Resume Builder** is the output — the artifact of your journey.

---

## User Scenarios

### Scenario 1: Arjun — Freshie Who Wants Microsoft
- 1st year CSE, Tier-2 college, CGPA: 8.2
- Sets goal: "Microsoft SDE Intern, end of 3rd year"
- Atlas generates: Learn DSA (semester 1-3) → Build 2 full-stack projects → Contribute to open source → Apply through referrals + on-campus
- Arjun clicks "DSA" node → Gets curated resources + can upload his class notes → AI generates practice-friendly summaries
- Gets matched with 47 other students on similar paths → Joins a cohort
- Gets notified about a relevant hackathon 6 weeks out → Signs up through the platform
- By end of 2nd year: Resume builder auto-populated with projects, hackathon wins, skills acquired

### Scenario 2: Priya — Career Pivoter
- 2nd year Mechanical, realizes she wants to go into Data Science
- Atlas shows her: It's doable. Here's the alternative route.
- Platform shows: Upskill in Python/Stats (use Study Engine with free resources) → Kaggle projects → Target analytics internships first → Pivot later
- Gets connected with a Mech-to-DS senior mentor on the platform

### Scenario 3: Exam Week
- Entire class uploads notes for "Operating Systems" final
- AI generates comprehensive study material: mindmaps linking processes→threads→scheduling
- Students can listen to audio summaries during commute
- Checklist shows what topics are covered vs. remaining
- Study group chat with progress bars

---

## Design Principles

1. **Graph-first, not feed-first.** The primary interaction is the map, not a scrollable feed.
2. **Actionable, not inspirational.** Every piece of content should tell you what to DO next.
3. **Personalized, not generic.** Your roadmap is yours. Not a template.
4. **Community is the moat.** The data from thousands of students' journeys makes the roadmaps smarter over time.
5. **Progressive disclosure.** Don't overwhelm. Show the next 3 nodes, not the entire 4-year plan at once.

---

## North Star Metrics

| Metric | What It Measures |
|--------|-----------------|
| Weekly Active Roadmap Users | Core engagement with the Atlas |
| Study Sessions Completed | AI Study Engine adoption |
| Opportunity Applications | Real-world action taken |
| Cohort Retention (30-day) | Social stickiness |
| Resume Exports | End-to-end value delivery |
