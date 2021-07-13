import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFormlyStepper } from './sds-formly-stepper';
import { SdsFormlyStepComponent } from './sds-formly-step.component';



@NgModule({
  declarations: [SdsFormlyStepper, SdsFormlyStepComponent],
  imports: [
    CommonModule
  ],
  exports: [SdsFormlyStepper, SdsFormlyStepComponent]
})
export class SdsFormlyStepperModule { }
