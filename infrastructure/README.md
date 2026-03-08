# Infrastructure — Local Development

## Docker Compose

Start all development services:

```bash
docker compose up -d
```

This runs:
- **PostgreSQL** on port 5432 (users, content, structured data)
- **Neo4j** on port 7474 (browser) / 7687 (bolt) — graph data for roadmaps
- **Redis** on port 6379 (cache, sessions)

## Access

| Service | URL | Credentials |
|---------|-----|-------------|
| PostgreSQL | `localhost:5432` | user: `studentos`, pass: `studentos`, db: `studentos` |
| Neo4j Browser | `http://localhost:7474` | user: `neo4j`, pass: `studentos` |
| Redis | `localhost:6379` | No auth (dev only) |
