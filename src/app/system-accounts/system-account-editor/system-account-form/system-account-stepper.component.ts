import { Component, Input } from '@angular/core';
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: 'system-account-stepper',
  providers: [{provide: SdsStepper, useExisting: SystemAccountStepperComponent}],
  templateUrl: './system-account-stepper.component.html',
  styles: [
    '.justify-content-space-between {justify-content: space-between; }',
    '.usa-sidenav__item--disabled {cursor: default; hover:none; opacity: 60%; pointer-events: none}',
  ]
})
export class SystemAccountStepperComponent extends SdsStepper {

  onCancelClicked() {
  }

  onSideNavClick() {
  }

}