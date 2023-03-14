import { Component } from '@angular/core';
import { SdsDialogRef } from '@gsa-sam/components';
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: 'entity-start-stepper',
  templateUrl: './entity-start-stepper.component.html',
  providers: [{ provide: SdsStepper, useExisting: EntityStartStepperComponent }]
})
export class EntityStartStepperComponent extends SdsStepper {
  responseDialog: SdsDialogRef<any>;

  onDialogOpen($event) {
    this.responseDialog = $event;
  }

  onCancelClicked() {
    this.responseDialog.close();
    this.responseDialog = undefined;
  }

  onSideNavClick() {
    if (!this.responseDialog) {
      return;
    }
    this.responseDialog.close();
    this.responseDialog = undefined;
  }
}
