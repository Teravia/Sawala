// Business/domain logic for "replies".
// Server-side only. Never trust client-side authorization.

import { RepliesRepository } from "./replies.repository";

export class RepliesService {
  constructor(private repo: RepliesRepository = new RepliesRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
