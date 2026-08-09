# SAWALA — Product Documentation

SAWALA adalah community-first social discussion platform di bawah **PT NISKALA BUANA**.

## Documents

1. `PRD.md` — Product Requirements Document
2. `BUSINESS-RULES.md` — Business Rules
3. `DOMAIN-MODEL.md` — Domain Model
4. `ERD.md` — Entity Relationship Diagram
5. `CLASSIFICATION.md` — Classification
6. `ARCHITECTURE.md` — Architecture
7. `DATABASE-PHYSICAL-SPECIFICATION.md` — Database / SQL specification
8. `REFACTOR.md` — Refactor & implementation plan

## Core Product Idea

> Community built on contribution.

Key differentiators:
- Community-first
- Thread-centric discussion
- Valid contribution tracking
- 1,000 valid contributions before GRP awarding
- GRP as non-monetary reputation
- Best Answer
- Thread Starter reward
- Anti-GRP farming
- Transparent promotion
- Human-reviewable moderation
- Searchable knowledge

## Suggested Initial Stack

- Next.js
- TypeScript
- Node.js
- PostgreSQL
- Redis
- S3-compatible storage
- PostgreSQL FTS → OpenSearch later
- Python for future AI/ML workloads
- Go only for proven high-load services

## Development Strategy

Start with a modular monolith. Split services only when scale or operational requirements justify it.
