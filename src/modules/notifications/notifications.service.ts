// Business/domain logic for "notifications".
// Server-side only. Never trust client-side authorization.

import { NotificationsRepository } from "./notifications.repository";

export class NotificationsService {
  constructor(private repo: NotificationsRepository = new NotificationsRepository()) {}

  // TODO: implement use cases per /docs/BUSINESS-RULES.md
}
