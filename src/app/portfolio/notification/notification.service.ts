import {
  Notification,
  NotificationType,
  Notifier,
} from '../../data/class';

import {
  Injectable,
} from '@angular/core';

@Injectable()
export class NotificationService {
  public notifier = new Notifier();

  public notify(
    message: string,
    notifType: NotificationType,
    entity: string,
    duration: number = 2000
  ): void {
    const notification: Notification = new Notification(message, notifType, entity);
    const dismissWait = () => {
      new Promise<void>(resolve => setTimeout(resolve, duration)).then(() => {
        this.notifier.destroy(notification);
      });
    }
    this.notifier.add(notification);
    dismissWait();
  }
}
