// Business/domain logic for "search".
// Server-side only. Never trust client-side authorization.

import { SearchRepository } from "./search.repository";

export class SearchService {
  constructor(private repo: SearchRepository = new SearchRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
