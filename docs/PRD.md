# SAWALA — Product Requirements Document (PRD)

**Product:** SAWALA  
**Parent Company:** PT NISKALA BUANA  
**Product Type:** Community-first social discussion platform  
**Status:** Product design / pre-development  
**Primary Principle:** Community built on contribution.

---

## 1. Product Vision

SAWALA adalah platform komunitas Indonesia yang memprioritaskan **diskusi, pengetahuan, kontribusi, dan reputasi** dibanding popularitas atau jumlah follower.

SAWALA bukan clone X, Threads, Reddit, atau Kaskus. Konsep community discussion, thread, reputation, dan user-generated content dapat menjadi inspirasi, tetapi:

- brand berbeda,
- information architecture berbeda,
- UI/UX berbeda,
- terminology berbeda,
- reputation model berbeda,
- business model berbeda.

### Core promise

> **Gagasan dihargai. Kontribusi membangun reputasi. Reputasi membangun kepercayaan.**

---

## 2. Problem

Platform sosial umum cenderung mengoptimalkan:

- follower,
- virality,
- engagement,
- short-form content,
- influencer popularity.

Akibatnya:

- konten berkualitas mudah tenggelam,
- user mengejar engagement dengan posting low-effort,
- reputasi tidak selalu mencerminkan kontribusi,
- diskusi lama sulit dijadikan knowledge base,
- komunitas sulit mempertahankan kualitas,
- promosi terselubung dapat merusak kepercayaan.

SAWALA ingin menggeser fokus dari **popularity** menjadi **contribution**.

---

## 3. Target Users

### 3.1 General Member
Pengguna yang membaca, membuat thread, dan menjawab thread.

### 3.2 Contributor
Member aktif dengan kontribusi valid yang mulai memiliki reputasi.

### 3.3 Trusted Member
Member dengan reputasi dan kontribusi tinggi.

### 3.4 Community Creator
Member yang membuat dan mengelola komunitas.

### 3.5 Moderator
Member yang diberi kewenangan moderasi komunitas/platform.

### 3.6 Business / Organization
Perusahaan, brand, organisasi, atau profesional yang membutuhkan presence resmi.

---

## 4. Product Pillars

1. **Community-first**
2. **Contribution-first reputation**
3. **High-quality discussion**
4. **Transparent promotion**
5. **Human-in-the-loop moderation**
6. **Searchable knowledge**
7. **Sustainable monetization**
8. **Privacy and user control**

---

## 5. Core Features

### 5.1 Account & Profile
- registration/login
- profile
- username
- avatar
- bio
- interests
- contribution statistics
- GRP
- badges
- community membership
- account status

### 5.2 Communities
- browse communities
- join/leave
- community feed
- community rules
- moderators
- community leaderboard
- community-specific reputation
- community search

### 5.3 Threads
- create thread
- title
- body
- tags
- media
- poll
- save
- share
- report
- follow thread
- lock thread
- edit/delete according to policy

### 5.4 Replies
- reply
- nested reply
- edit/delete
- helpful reaction
- insightful reaction
- GRP award
- best answer
- report

### 5.5 Reputation
- Contribution Score
- valid contribution counter
- GRP
- best answer
- badges
- reputation history
- GRP eligibility

### 5.6 Thread Starter Reward
Thread Starter (TS) receives contribution/reputation reward when a thread achieves sufficient quality.

Reward must be based on quality signals, not raw comment count.

### 5.7 Moderation
- report
- automated risk detection
- temporary content restriction
- moderator review
- account restriction
- suspension
- appeal
- audit log
- evidence preservation
- community moderation

### 5.8 Search & Discovery
- thread search
- community search
- member search
- tag search
- latest
- popular
- unanswered
- knowledge
- personalized feed

### 5.9 Notifications
- reply
- mention
- GRP received
- best answer
- thread reward
- moderation
- community events

### 5.10 Monetization
- advertising
- premium
- community pro
- business account
- creator/community monetization
- social commerce / affiliate integrations
- AI features

---

## 6. Reputation Model

### Contribution
Contribution measures meaningful participation.

Examples:
- relevant reply: +1
- quality thread: +5
- best answer: +10
- featured thread: +15

Junk content:
- +0
- may produce penalty

Moderation action can reduce contribution score.

### GRP
GRP = Good Reputation Point.

GRP represents community trust and appreciation. It is **not money** and cannot be purchased.

Only eligible members can award GRP.

Initial eligibility:
- minimum 1,000 valid contributions
- account meets minimum age/activity requirement configured by policy
- no active reputation abuse restriction
- account is not suspended/locked

---

## 7. Thread Starter (TS)

The creator of a thread receives TS designation.

TS may receive a reward when:
- thread reaches a minimum quality threshold,
- discussion is meaningful,
- unique participants are sufficient,
- content remains compliant,
- engagement is not artificially manipulated.

TS reward must not be based solely on:
- view count,
- raw reply count,
- reaction count.

---

## 8. Moderation Philosophy

SAWALA should react quickly to serious risks but must not let an automated model become the final legal judge.

### High-risk suspected illegal content
System may immediately:
- restrict the thread,
- stop new replies,
- restrict the account temporarily,
- create moderation case,
- preserve relevant evidence.

Then:
- human moderator reviews,
- action is confirmed, reversed, or escalated according to applicable law and platform policy.

### Other violations
Possible actions:
- warning
- content removal
- thread lock
- temporary posting restriction
- suspension
- permanent ban

---

## 9. Anti-Astroturfing / Promotion Integrity

SAWALA must prohibit deceptive promotion.

Allowed:
- genuine personal experience
- genuine product recommendation
- honest criticism
- disclosed affiliate relationship
- sponsored content with disclosure

Prohibited:
- fake testimonials
- paid users pretending to be ordinary members
- coordinated fake engagement
- GRP farming for commercial promotion
- company employees hiding material relationships

Optional future feature:
**Verified Experience**, indicating that a member actually used a service. It must not imply that the experience is positive or that SAWALA endorses it.

---

## 10. Example User Journey

1. User registers.
2. User joins communities.
3. User reads threads.
4. User creates a useful thread.
5. Other members reply.
6. Members react Helpful / Insightful.
7. One reply becomes Best Answer.
8. Thread receives quality score.
9. TS receives contribution reward.
10. After 1,000 valid contributions, user becomes eligible to award GRP.
11. User awards GRP to genuinely useful contributors.
12. Reputation grows.
13. User unlocks community privileges.

---

## 11. MVP Scope

### Must Have
- authentication
- profile
- communities
- thread
- reply
- reaction
- report
- basic moderation
- contribution counter
- GRP eligibility
- GRP award
- best answer
- TS reward
- notifications
- search
- admin/moderator panel

### Later
- premium
- ads
- community pro
- business accounts
- AI summaries
- advanced recommendation
- verified experience
- commerce
- mobile native apps

---

## 12. Non-Goals for MVP

- full X-style real-time social feed
- short video platform
- cryptocurrency/token economy
- direct GRP cash-out
- complex microservices
- algorithmic AI-only moderation
- unlimited media/video hosting

---

## 13. Success Metrics

### Community
- weekly active contributors
- valid contribution ratio
- reply quality
- best-answer rate
- unresolved-question rate
- community retention

### Reputation
- GRP awarded per active contributor
- suspicious GRP rate
- reputation abuse rate

### Content
- percentage of useful threads
- search success rate
- time to first useful answer
- returning thread readership

### Business
- premium conversion
- community pro conversion
- business account revenue
- advertising revenue
- revenue per active user

---

## 14. Product Principle

SAWALA must optimize for:

> **Useful > viral**  
> **Contribution > follower count**  
> **Trust > reach**  
> **Transparent promotion > disguised advertising**  
> **Human judgment + automation > automation alone**
