// Business/domain logic for "moderation".
// Server-side only. Never trust client-side authorization.

import { ModerationRepository } from "./moderation.repository";

export class ModerationService {
  constructor(private repo: ModerationRepository = new ModerationRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
