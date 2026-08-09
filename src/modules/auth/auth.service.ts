// Business/domain logic for "auth".
// Server-side only. Never trust client-side authorization.

import { AuthRepository } from "./auth.repository";

export class AuthService {
  constructor(private repo: AuthRepository = new AuthRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
