# SAWALA — Domain Model

## 1. Bounded Contexts

SAWALA is divided into logical domains.

### Identity
- User
- Profile
- AccountStatus
- Session

### Community
- Community
- CommunityMember
- CommunityRole
- CommunityRule

### Content
- Thread
- Reply
- Tag
- ThreadTag
- Media
- Poll

### Reputation
- ContributionEvent
- ContributionScore
- GRPAward
- ReputationLedger
- Badge
- UserBadge

### Reward
- ThreadQuality
- ThreadReward
- BestAnswer

### Moderation
- Report
- ModerationCase
- ModerationAction
- AccountRestriction
- ContentRestriction
- Appeal
- AuditLog

### Notification
- Notification
- NotificationPreference

### Monetization
- Subscription
- Plan
- Advertisement
- BusinessAccount
- CommunitySubscription

---

## 2. Aggregate Roots

### User Aggregate
User owns:
- Profile
- Account status
- Preferences

### Community Aggregate
Community owns:
- membership
- roles
- rules
- moderation configuration

### Thread Aggregate
Thread owns:
- replies
- tags
- thread state
- best answer
- quality/reward state

### Reputation Aggregate
User reputation is derived from:
- contribution events
- GRP awards
- reversals
- moderation penalties

---

## 3. Key Relationships

```text
User
 ├── Profile
 ├── CommunityMembership
 ├── Thread
 ├── Reply
 ├── GRPAward
 ├── ContributionEvent
 ├── Report
 └── Notification

Community
 ├── CommunityMembership
 ├── CommunityRule
 ├── Thread
 └── CommunityModerator

Thread
 ├── Reply
 ├── Tag
 ├── Media
 ├── Report
 ├── BestAnswer
 └── ThreadReward

Reply
 ├── Reply
 ├── Reaction
 ├── GRPAward
 └── Report
```

---

## 4. Reputation Concept

Separate:

### Contribution Score
Measures activity/quality contribution.

### GRP
Measures appreciation/trust received from eligible members.

### Reputation Level
Derived from configurable thresholds and moderation status.

These values must not be conflated.

---

## 5. Thread State Machine

```text
DRAFT
  ↓
PUBLISHED
  ↓
ACTIVE
  ├── LOCKED
  ├── RESTRICTED
  ├── REMOVED
  └── ARCHIVED
```

Restricted/locked content may later return to ACTIVE after review.

---

## 6. Account State Machine

```text
ACTIVE
 ├── LIMITED
 ├── RESTRICTED
 ├── SUSPENDED
 ├── LOCKED
 └── BANNED
```

State transitions must be recorded in audit logs.

---

## 7. Reputation Ledger Principle

Do not store only a mutable `grp_balance`.

Use a ledger:

```text
GRP Award +1
GRP Award +1
GRP Reversal -1
GRP Penalty -5
```

Current balance is derived or maintained from the ledger with reconciliation.

This makes abuse investigation possible.

---

## 8. Domain Events

Recommended events:

- UserRegistered
- CommunityJoined
- ThreadCreated
- ReplyCreated
- ReplyMarkedBestAnswer
- ContributionAwarded
- ContributionReversed
- GRPAwarded
- GRPReversed
- ThreadRewarded
- ReportCreated
- ThreadRestricted
- ThreadLocked
- AccountRestricted
- AccountSuspended
- ModerationCaseResolved
- NotificationCreated

These events can later support queues and analytics without forcing microservices in MVP.
