import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'splash-alert',
  template: `
      <landing-alert *ngIf="!appModel.signedIn">
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

  constructor(public appModel: SamModelService) { }

  ngOnInit(): void {}

  signIn() {
    this.appModel.signIn('/home/entity-information');
  }

}
