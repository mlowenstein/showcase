import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

/**
 * Date: September 2019
 * Author: Michael Lowenstein
 * Company: Peloton Computer Enterprises Ltd.
 */

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }
    ),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        animate('0.3s ease-in-out',
          style({ transform: 'scale3d(0, 0, 0)' }))
      ], { optional: true }),
    ])
  ]),
]);

export const notifyAnimation = trigger('notifyme', [
  state('void', style({opacity: 0, height: 0})),
  state('show', style({opacity: 1, height: '*'})),
  transition('void => show, show => void', [animate('0.25s')]),
]);


