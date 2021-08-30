import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'splash-alert',
  template: `
      <landing-alert *ngIf="!service.signedIn">
        <div class="grid-row">
          <div class="grid-col-fill">
            You must be signed in to search for entity registrations
          </div>
          <div class="grid-col-auto">
            <button class="usa-button usa-button--secondary" (click)="signIn();">
              Sign In
            </button>
          </div>
        </div>
    </landing-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashAlertComponent implements OnInit {

  constructor(public service: AppService) { }

  ngOnInit(): void {}

  signIn() {
    this.service.signIn('/home/entity-information');
  }

}
