// Business/domain logic for "reputation".
// Server-side only. Never trust client-side authorization.

import { ReputationRepository } from "./reputation.repository";

export class ReputationService {
  constructor(private repo: ReputationRepository = new ReputationRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
