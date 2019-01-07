import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { NotificationService } from '../notifications.service';

import { timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state(
        'hidden',
        style({
          opacity: 0,
          bottom: '0px'
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          bottom: '30px'
        })
      ),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message: string;
  snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifier
      .pipe(
        tap(message => {
          this.message = message;
          this.snackVisibility = 'visible';
        }),
        switchMap(message => timer(3000))
      )
      .subscribe(timer => (this.snackVisibility = 'hidden'));
  }
}
