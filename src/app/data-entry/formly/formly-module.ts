import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { FormlyFieldStepperComponent } from "./formly-stepper";
import { StepperModule } from "../stepper/stepper.module";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { FormlyDetailsComponent } from "./formly-details";
import { FormlySubawardComponent } from "./formly-subaward";
import { FormlyContractComponent } from "./formly-contract";
import { SdsIconModule } from "@gsa-sam/components";
import { ReviewDetailsComponent } from "../review-details/review-details.component";

@NgModule({
  declarations: [FormlyFieldStepperComponent, ReviewDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    SdsIconModule,
    FormlyModule,

    SdsFormlyModule.forChild({
      types: [
        {
          name: "stepper",
          component: FormlyFieldStepperComponent,
          wrappers: sdsWrappers,
        },
        {
          name: "details",
          component: FormlyDetailsComponent,
          wrappers: sdsWrappers,
        },
        {
          name: "subaward",
          component: FormlySubawardComponent,
          wrappers: sdsWrappers,
        },
        {
          name: "contract",
          component: FormlyContractComponent,
          wrappers: sdsWrappers,
        },
      ],
    }),
  ],
})
export class PrototypeFormlyModule {}
