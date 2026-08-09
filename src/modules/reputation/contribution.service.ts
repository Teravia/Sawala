// Contribution event processing + eligibility checks.
// Server-side only. Client never mutates contribution/GRP state directly.

import { ContributionRepository } from "./contribution.repository";
import { CONTRIBUTION_RULES } from "./contribution.rules";

export class ContributionService {
  constructor(private repo: ContributionRepository = new ContributionRepository()) {}

  // TODO: record contribution event -> validate -> append to ledger
  // TODO: check GRP eligibility against CONTRIBUTION_RULES
}
