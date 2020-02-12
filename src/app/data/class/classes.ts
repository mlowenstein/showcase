/** Notification Type category */
export enum NotificationType {
  Success = 1,
  Error = 2,
  Info = 3,
}

/** Notification class to replace third-party 'snotify'. */
export class Notification {
  public entity?: string;
  public message: string;
  public type: NotificationType;

  constructor(message: string, type: NotificationType | null, entity?: string) {
    if (entity) this.entity = entity;
    this.message = message;
    this.type = type;
  }
}

/** Vehicle for managing notifications. */
export class Notifier {
  public notifications: Notification[] = [];

  public destroy(notification: Notification): void {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  public add(notification: Notification): void {
    this.notifications.unshift(notification);
  }
}
