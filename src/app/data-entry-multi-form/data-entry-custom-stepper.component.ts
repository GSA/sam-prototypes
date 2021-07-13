import { Component } from "@angular/core";
import { SdsStepper } from "@gsa-sam/sam-formly";

@Component({
  selector: `data-entry-custom-stepper`,
  templateUrl: `./data-entry-custom-stepper.component.html`,
  providers: [
    {provide: SdsStepper, useExisting: DataEntryCustomStepperComponent}
  ]
})
export class DataEntryCustomStepperComponent extends SdsStepper {

}