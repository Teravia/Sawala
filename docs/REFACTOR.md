# SAWALA — Refactor & Implementation Plan

## 1. Objective

Build SAWALA without creating a premature distributed system.

Primary architecture:

> **Next.js + TypeScript + PostgreSQL + Redis + Object Storage**

Start as a modular monolith.

---

## 2. Phase 0 — Foundation

Create:
- repository
- environment configuration
- database connection
- migration system
- auth
- design tokens
- error handling
- logging
- testing setup

Recommended folders:

```text
src/
├── app/
├── components/
├── modules/
├── lib/
├── config/
├── jobs/
└── tests/
```

---

## 3. Phase 1 — Identity

Implement:
- registration
- login
- session
- profile
- username
- account status
- permission middleware

Acceptance:
- user can register/login/logout
- unique username
- locked users cannot post

---

## 4. Phase 2 — Communities

Implement:
- community list
- community detail
- join/leave
- roles
- rules
- moderators

Acceptance:
- member can join
- moderator can manage community
- platform admin has global authority

---

## 5. Phase 3 — Thread & Reply

Implement:
- create thread
- edit
- delete
- reply
- nested reply
- lock
- tags
- basic reactions

Acceptance:
- thread/reply lifecycle is auditable
- locked threads reject new replies

---

## 6. Phase 4 — Contribution Engine

Create a dedicated module:

```text
modules/reputation/
├── contribution.service.ts
├── contribution.rules.ts
├── contribution.repository.ts
├── contribution.types.ts
└── contribution.test.ts
```

Important:
- scoring rules must be configuration-driven
- no hardcoded 1,000 in UI
- server validates eligibility

---

## 7. Phase 5 — GRP

Implement:
- eligibility calculation
- GRP award
- daily limits
- cooldown
- ledger
- reversal
- anti-collusion signals

Never allow client-side GRP mutation.

Correct:

```text
Client
  ↓
POST /grp/award
  ↓
Server authorization
  ↓
Eligibility check
  ↓
Rate limit
  ↓
Anti-abuse check
  ↓
GRP ledger transaction
```

Incorrect:

```text
Client → update grp_balance
```

---

## 8. Phase 6 — Best Answer & TS Reward

Implement:
- best answer
- thread quality scoring
- TS reward calculation
- reward ledger
- reversal

Quality scoring should be deterministic and explainable initially.

---

## 9. Phase 7 — Moderation

Implement:
- report
- moderation queue
- reason codes
- thread lock
- content restriction
- account restriction
- audit log
- appeals

Automation:
- spam classifier
- risk classifier
- duplicate detection

Important:
Automated systems trigger containment or prioritization; final legal/policy judgment should be reviewable by authorized humans.

---

## 10. Phase 8 — Search

MVP:
- PostgreSQL full-text search
- indexed title/body

Later:
- OpenSearch
- typo tolerance
- semantic search
- ranking

---

## 11. Phase 9 — Notifications

Queue:
- reply notification
- mention
- GRP
- best answer
- moderation
- community event

Do not send all notifications synchronously during request handling.

---

## 12. Phase 10 — Anti-Abuse

Implement:
- IP/device/account rate limits
- duplicate content detection
- GRP mutual-exchange detection
- abnormal contribution velocity
- mass-report detection
- account linkage signals
- moderation audit

Do not expose detection rules in detail to users.

---

## 13. Phase 11 — UI/UX

Visual direction based on approved concept:

### Background
Light / white / very light neutral.

### Brand
Purple accent.

### Layout
Three-column desktop:
- left navigation
- central discussion
- right context/profile

### Principles
- editorial
- clean
- readable
- subtle borders
- restrained shadows
- no excessive gradients
- no uniform card grid everywhere
- mobile-first responsive behavior

The UI must not copy Kaskus/X/Threads layouts literally.

---

## 14. Phase 12 — Monetization

Only after community fundamentals are healthy.

Order:
1. Community Pro
2. Premium
3. Business accounts
4. Transparent native ads
5. Creator/community monetization
6. Commerce/affiliate
7. Enterprise/community tools

Do not sell GRP.

---

## 15. Testing Strategy

### Unit
- contribution rules
- GRP eligibility
- GRP limits
- reward calculation
- moderation severity
- permission rules

### Integration
- thread creation
- reply
- best answer
- GRP transaction
- moderation action

### Security
- authorization
- privilege escalation
- rate limits
- injection
- session abuse
- file upload
- moderation bypass

### Load
Test:
- feed
- thread detail
- reply creation
- notification queue
- search

---

## 16. Deployment

Initial:
- Docker
- PostgreSQL
- Redis
- object storage
- CI/CD

Environment separation:
- development
- staging
- production

Production must have:
- backups
- rollback
- migrations
- monitoring
- alerting

---

## 17. Refactor Rules

Avoid:
- giant page components
- business logic inside React components
- direct database access from UI
- client-side authorization
- mutable reputation without ledger
- duplicated scoring logic
- hardcoded moderation thresholds
- premature microservices

Prefer:
- domain modules
- server-side validation
- service/repository boundaries
- immutable event/ledger records
- configuration-driven rules
- automated tests around business rules

---

## 18. Definition of Done for MVP

SAWALA MVP is considered ready when:

- users can register and build profiles
- communities can be created and moderated
- threads and replies work
- contribution scoring works
- junk does not count toward 1,000 valid contributions
- eligible members can award GRP
- GRP abuse can be detected/reversed
- Best Answer works
- TS rewards work
- reporting and moderation work
- serious-risk content can be restricted quickly
- moderation actions are auditable
- search works
- notifications work
- mobile layout is usable
- critical business rules have automated tests
