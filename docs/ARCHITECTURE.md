# SAWALA — Architecture

## 1. Architectural Strategy

Use a **modular monolith first**.

Do not start with microservices.

Goal:

> Strong domain boundaries without unnecessary distributed-system complexity.

---

## 2. Recommended Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS or equivalent design system

### Backend
- TypeScript
- Node.js
- API layer inside modular application

### Database
- PostgreSQL

### Cache / Queue
- Redis
- BullMQ or equivalent queue abstraction

### Storage
- S3-compatible object storage

### Search
- PostgreSQL full-text search for MVP
- OpenSearch later

### AI
- Separate Python service later for ML/NLP workloads

### Realtime
- WebSocket / managed realtime for MVP
- Dedicated realtime service only when scale justifies it

---

## 3. Application Structure

```text
sawala/
├── app/
├── components/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── communities/
│   ├── threads/
│   ├── replies/
│   ├── reputation/
│   ├── rewards/
│   ├── moderation/
│   ├── notifications/
│   ├── search/
│   └── monetization/
├── lib/
│   ├── db/
│   ├── cache/
│   ├── queue/
│   ├── storage/
│   └── security/
├── config/
├── jobs/
└── tests/
```

---

## 4. Request Flow

```text
Browser
  ↓
Next.js
  ↓
Application Module
  ↓
Domain Rules
  ↓
Repository
  ↓
PostgreSQL

Side effects:
Application
  ↓
Queue
  ├── notifications
  ├── reputation calculation
  ├── moderation analysis
  ├── search indexing
  └── analytics
```

---

## 5. Feed Architecture

MVP:
- chronological
- community popular
- latest
- unanswered
- followed communities

Later:
- personalized ranking
- recommendation model
- quality score
- user interest model

Do not build a complex ML feed before there is sufficient data.

---

## 6. Moderation Architecture

```text
New Content
   ↓
Basic validation
   ↓
Risk classifier
   ├── Low risk → publish
   ├── Medium → publish + monitor / queue
   └── High risk → temporary restriction
                         ↓
                    Human Review
                         ↓
             confirm / restore / escalate
```

---

## 7. Reputation Architecture

```text
Content Action
   ↓
Contribution Event
   ↓
Validation
   ↓
Contribution Ledger
   ↓
Contribution Aggregate

Eligible Member
   ↓
GRP Award
   ↓
GRP Ledger
   ↓
Recipient Reputation
```

---

## 8. Security

Minimum requirements:
- password hashing through trusted auth provider/library
- secure sessions
- CSRF protection where applicable
- rate limiting
- input validation
- output sanitization
- permission checks
- audit logging
- signed media URLs where appropriate
- abuse detection
- admin MFA
- secret management
- database backups

---

## 9. Scaling Path

### Stage 1
One modular application + PostgreSQL + Redis + object storage.

### Stage 2
Add queue workers and dedicated search.

### Stage 3
Separate high-load components:
- notification
- realtime
- feed processing
- media processing

### Stage 4
Introduce Go services only for proven high-throughput workloads.

### Stage 5
Introduce Python ML services for:
- recommendation
- moderation models
- semantic search
- summarization

---

## 10. Observability

Required:
- structured logs
- error tracking
- metrics
- request tracing
- queue monitoring
- database monitoring
- moderation audit dashboard

Key metrics:
- API latency
- DB latency
- queue delay
- error rate
- report rate
- moderation backlog
- GRP anomaly rate
