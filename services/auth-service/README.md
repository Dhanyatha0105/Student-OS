# 🔐 Auth Service

> **Authentication & User Management**

## What This Service Does

- JWT-based authentication with refresh tokens
- OAuth providers: Google, GitHub
- College email verification for campus features
- User profile management (college, branch, year, CGPA, skills)
- Rate limiting: 100 req/min per user, 1000 req/min per IP

## API Endpoints (Planned)

```
POST   /api/auth/signup          — Email/Google signup
POST   /api/auth/login           — Login
POST   /api/auth/verify-college  — Verify college email
GET    /api/users/me             — Get current user profile
PATCH  /api/users/me             — Update profile
GET    /api/users/:id            — Get public profile
```

## Initial Implementation

Will use NextAuth.js for Phase 0-1 (embedded in Next.js app), then extract to standalone service as scale requires.

## Status

🔴 **Not started** — Implementation begins in Phase 0 (Weeks 3-4).
