// Configuration-driven contribution scoring rules.
// IMPORTANT: no hardcoded "1000" thresholds in UI — read from config.
// See /docs/BUSINESS-RULES.md section on valid contributions.

export const CONTRIBUTION_RULES = {
  validContributionsRequiredForGrpEligibility: 1000, // TODO: move to config/reputation.config.ts
};
