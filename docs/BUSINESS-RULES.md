# SAWALA — Business Rules

## 1. Account

BR-001. Username must be unique.

BR-002. An account can have one active primary profile.

BR-003. Suspended/locked accounts cannot create new content or award GRP.

BR-004. Account status changes must be auditable.

BR-005. High-risk moderation restrictions may be applied immediately and reviewed afterward.

---

## 2. Community

BR-010. Every community has an owner or accountable administrator.

BR-011. Every community must have published rules.

BR-012. Community moderators can act only within granted scope.

BR-013. Platform-level safety rules override community-specific rules.

BR-014. A community may restrict posting privileges.

---

## 3. Thread

BR-020. Every thread has exactly one Thread Starter (TS).

BR-021. Thread title is required.

BR-022. Thread must belong to one primary community.

BR-023. Thread can have multiple tags.

BR-024. Locked threads cannot receive new replies.

BR-025. Locked threads remain readable unless removed for policy/legal reasons.

BR-026. A deleted thread must retain an internal moderation/audit record.

---

## 4. Valid Contribution

BR-030. Contribution count is not equal to raw post count.

BR-031. Junk/low-effort posts do not count as valid contributions.

BR-032. Deleted content does not count as valid contribution.

BR-033. Content removed for spam, abuse, or serious policy violations does not count.

BR-034. Contribution scoring can be recalculated when moderation changes content status.

BR-035. The platform may use automated quality signals, but quality classification should support moderation rather than silently determining legal liability.

---

## 5. Contribution Scoring

Initial configurable weights:

| Action | Score |
|---|---:|
| Valid reply | +1 |
| Quality thread | +5 |
| Best Answer | +10 |
| Featured thread | +15 |
| Spam/junk | 0 |
| Removed content | -5 |
| Serious abuse | -20 |

Weights must be configuration-driven rather than hardcoded.

---

## 6. GRP Eligibility

BR-040. A member must have at least **1,000 valid contributions** to award GRP.

BR-041. The 1,000 threshold counts valid contributions, not raw posts.

BR-042. A member below the threshold can receive GRP but cannot award GRP.

BR-043. An account with active reputation restrictions cannot award GRP.

BR-044. GRP eligibility is recalculated when contribution status changes.

BR-045. Eligibility can be revoked if abuse is detected.

---

## 7. GRP Award

BR-050. GRP cannot be purchased.

BR-051. GRP cannot be transferred between users except through a legitimate content appreciation action.

BR-052. Daily GRP allowance is configurable.

Initial suggestion:
- 1,000+ valid contributions: 5 GRP awards/day
- 5,000+: 10/day
- 10,000+: 20/day

BR-053. The same recipient should have a configurable cooldown to prevent repetitive GRP farming.

BR-054. Mutual GRP patterns may trigger risk detection.

BR-055. Fraudulent GRP can be reversed.

BR-056. GRP reversal must be logged.

---

## 8. Best Answer

BR-060. A thread may have zero or one accepted Best Answer.

BR-061. Thread Starter can mark a Best Answer unless community rules override it.

BR-062. Moderator may change Best Answer when necessary.

BR-063. Best Answer reward is reversible if content is later removed.

---

## 9. Thread Starter Reward

BR-070. TS reward is calculated from quality signals.

BR-071. Raw views alone cannot trigger a reward.

BR-072. Raw reply count alone cannot trigger a reward.

BR-073. Reward may consider:
- unique participants
- useful reactions
- best answer
- discussion longevity
- content quality
- moderation status
- spam/manipulation risk

BR-074. A thread with serious policy violations is not eligible for reward.

BR-075. Reward values are configurable.

---

## 10. Moderation

BR-080. Users can report content.

BR-081. Reports create moderation cases.

BR-082. Serious suspected illegal content may be immediately restricted pending review.

BR-083. Automated systems must not be treated as the sole final authority on whether conduct violates a specific law.

BR-084. Moderators can lock a thread.

BR-085. Moderators can restrict an account.

BR-086. Permanent account action requires appropriate authority level.

BR-087. Every moderation action must have a reason code.

BR-088. Appeals must be possible where operationally appropriate.

---

## 11. Promotion Integrity

BR-090. Genuine personal experience is allowed.

BR-091. Sponsored/affiliate relationships must be disclosed.

BR-092. Fake testimonials are prohibited.

BR-093. Coordinated fake accounts are prohibited.

BR-094. Staff/partners must not impersonate independent users.

BR-095. GRP cannot be granted as payment for positive commercial statements.

BR-096. Verified Experience may confirm service usage but does not endorse the service.

---

## 12. Privacy

BR-100. Private user data must not be exposed publicly.

BR-101. Moderation evidence is access-controlled.

BR-102. Analytics must follow applicable privacy requirements.

BR-103. Users should have appropriate controls for account/data management.

---

## 13. Monetization

BR-110. Premium does not provide GRP.

BR-111. Paid advertising must be identifiable.

BR-112. Community Pro features cannot override platform safety rules.

BR-113. Advertisers cannot purchase reputation.

---

## 14. Configuration

The following must be configurable:
- contribution weights
- GRP eligibility threshold
- daily GRP limit
- reward thresholds
- moderation severity
- report thresholds
- anti-abuse limits
- community permissions
