// Business/domain logic for "threads".
// Server-side only. Never trust client-side authorization.

import { ThreadsRepository } from "./threads.repository";

export class ThreadsService {
  constructor(private repo: ThreadsRepository = new ThreadsRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
