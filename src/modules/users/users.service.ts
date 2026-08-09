// Business/domain logic for "users".
// Server-side only. Never trust client-side authorization.

import { UsersRepository } from "./users.repository";

export class UsersService {
  constructor(private repo: UsersRepository = new UsersRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
