import {
  Component,
} from '@angular/core';
import {
  NotificationService,
} from './notification.service';
import {
  Notifier,
} from '../../data/class';
import {
  notifyAnimation,
} from '../../app.animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [notifyAnimation],
})
export class NotificationComponent {

  constructor(private notify: NotificationService) { }

  get source(): Notifier {
    return this.notify.notifier;
  }
}
