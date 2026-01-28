# Student OS — Design Guide

> Incorporates the [SKILL.md](../SKILL.md) frontend design principles into the Student OS context.

---

## Design Philosophy

Student OS is **NOT** a generic EdTech app. It's a premium, graph-first platform that should feel like a futuristic mission control for a student's career journey.

### Aesthetic Direction: **Dark Futuristic Atlas**
- Think: a GPS/navigation system for your career, not a boring LMS
- Dark backgrounds with glowing nodes and connections
- Maps and graphs as the primary interaction pattern
- Progressive disclosure: show 3 next nodes, not the entire 4-year plan

---

## Typography

| Usage | Font | Weight | Size |
|-------|------|--------|------|
| Headlines / Hero | **Sora** | 700-800 | 2-4rem |
| Sub-headings | **Sora** | 500-600 | 1.25-1.5rem |
| Body text | **DM Sans** | 400-500 | 0.875-1rem |
| Code / Technical | **JetBrains Mono** | 400-500 | 0.8-0.9rem |

> ⚠️ NEVER use Inter, Roboto, Arial, or system fonts — these are generic "AI slop"

---

## Color Palette

### Primary: Ocean Teal → `#0fb8a8`
Represents: knowledge, depth, clarity, growth

### Accent: Warm Amber → `#ffb800`
Represents: ambition, energy, achievement, action

### Surfaces (Dark Theme)
```
Background:    #0a0e17
Card:          #111827
Elevated:      #1a2236
Border:        #1e293b
Subtle:        #0f172a
```

### Text
```
Primary:       #f1f5f9
Secondary:     #94a3b8
Muted:         #64748b
```

### Semantic
```
Success:       #10b981
Warning:       #f59e0b
Error:         #ef4444
Info:          #3b82f6
```

---

## Component Patterns

### Roadmap Nodes
- Rounded rectangles with colored left border (status indicator)
- Glow effect on hover/active
- Status colors: Not Started (muted), In Progress (teal pulse), Completed (green), Skipped (amber)

### Cards
- Dark surface (`#111827`) with subtle border (`#1e293b`)
- `border-radius: 16px`
- No drop shadows — use subtle borders and background differentiation

### Buttons
- Primary: Solid teal gradient
- Secondary: Ghost with teal border
- Accent: Amber for CTAs

### Animations
- Page transitions: fade + slight slide up
- Node interactions: scale on hover, glow on click
- Progress updates: smooth fill animations
- Use CSS transitions, not JavaScript animations where possible

---

## Key Rules

1. **No generic AI aesthetics** — no purple gradients on white, no cookie-cutter cards
2. **Graph-first** — the primary interaction is the map/graph, not a scrollable feed
3. **Dark theme first** — light theme is secondary (most student usage is late-night study)
4. **Bold but intentional** — every design choice should have a reason
5. **Mobile-responsive** — graphs collapse to step-by-step lists on mobile

---

*For implementation reference, see the design tokens in `packages/ui/src/index.ts`*
