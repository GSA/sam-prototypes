import { AfterContentInit, Component, OnInit } from "@angular/core";
import { SdsStepper } from "@gsa-sam/sam-formly";


@Component({
  selector: `add-subawardee-stepper`,
  templateUrl: './add-subawardee-stepper.component.html',
  providers: [
    { provide: SdsStepper, useExisting: AddSubawardeeStepperComponent }
  ]
})
export class AddSubawardeeStepperComponent extends SdsStepper implements AfterContentInit {

  stepLabels = [];
  currentStepIndex = 0;

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.stepLabels = this.stepTemplates.map((stepTemplate, index) => {
      if (stepTemplate.id === this.currentStepId) {
        this.currentStepIndex = index;
      }

      return { ...stepTemplate, label: stepTemplate.text };
    });
  }
}
