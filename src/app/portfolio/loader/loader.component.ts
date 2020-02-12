import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
/**
 * LoaderComponent: Temporary solution for
 * the route-refresh mechanism. This component
 * serves as a placeholder for the app after
 * the user refreshes the page their on. It
 * will have to be replaced with a standard
 * practice for refreshing activated routes.
 */
export class LoaderComponent {
  @Input() active: boolean;
  @Input() message: string;
  @Input() respond?: boolean;
  @Input() showstats: boolean;
  @Input() stalledout: boolean;
  @Output() refreshing = new EventEmitter<any>();
  progressMessage = 'Progress: ';
  responses: any[] = [];

  /** Event emitter that triggers the reload of the application. */
  refresh() {
    let routeconfig: any;
    routeconfig = JSON.parse(localStorage.getItem('routeconfig'));
    this.refreshing.emit(routeconfig);
  }
}
