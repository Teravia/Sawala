# SAWALA

Community-first social discussion platform under PT NISKALA BUANA.

> Community built on contribution.

## Stack
Next.js · TypeScript · Node.js · PostgreSQL · Redis · S3-compatible storage · PostgreSQL FTS (→ OpenSearch later)

## Structure
See `docs/ARCHITECTURE.md` for full details. Modular monolith:

```
src/
├── app/          # Next.js App Router (pages, layouts, API routes)
├── components/   # UI + layout components
├── modules/      # Domain modules (auth, users, communities, threads,
│                 #   replies, reputation, rewards, moderation,
│                 #   notifications, search, monetization)
├── lib/          # db, cache, queue, storage, security
├── config/       # env-driven + business-rule configuration
└── jobs/         # background workers
tests/            # unit, integration, security
docs/             # product documentation (PRD, business rules, ERD, etc.)
```

## Docs
1. `docs/PRD.md`
2. `docs/BUSINESS-RULES.md`
3. `docs/DOMAIN-MODEL.md`
4. `docs/ERD.md`
5. `docs/CLASSIFICATION.md`
6. `docs/ARCHITECTURE.md`
7. `docs/DATABASE-PHYSICAL-SPECIFICATION.md`
8. `docs/REFACTOR.md` — implementation phase plan (start here for build order)

## Development strategy
Start as a **modular monolith**. Split into services only when scale/ops requirements justify it.
Deployment target is not yet decided — see `docs/REFACTOR.md` §16 for baseline requirements (Docker, Postgres, Redis, object storage, CI/CD, staged environments).
