// Business/domain logic for "communities".
// Server-side only. Never trust client-side authorization.

import { CommunitiesRepository } from "./communities.repository";

export class CommunitiesService {
  constructor(private repo: CommunitiesRepository = new CommunitiesRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
