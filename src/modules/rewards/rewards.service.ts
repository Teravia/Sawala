// Business/domain logic for "rewards".
// Server-side only. Never trust client-side authorization.

import { RewardsRepository } from "./rewards.repository";

export class RewardsService {
  constructor(private repo: RewardsRepository = new RewardsRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
