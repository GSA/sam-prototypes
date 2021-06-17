import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule, FormControl, ValidationErrors } from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { CdkStepperModule } from "@angular/cdk/stepper";
import { FormlySubawardComponent } from "./formly-subaward";
import { FormlyContractComponent } from "./formly-contract";
import { SdsIconModule } from "@gsa-sam/components";
import { SubawardDataComponent } from "../subaward-data/subaward-data.component";
import { ReviewContractComponent } from "../review-contract/review-contract.component";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { ExpandableCardModule } from "../../app-layout/card/card.module";
import { StepperModule } from "../../app-layout/stepper/stepper.module";
import { FormlyCustomComponent } from "./formly-custom";

@NgModule({
  declarations: [
    FormlyContractComponent,
    FormlySubawardComponent,
    SubawardDataComponent,
    ReviewContractComponent,
    FormlyCustomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    SdsActionsMenuModule,
    ExpandableCardModule,
    CdkStepperModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    SdsIconModule,
    FormlyModule,

    SdsFormlyModule.forChild({
      types: [
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
        {
          name: "custom",
          component: FormlyCustomComponent,
          wrappers: sdsWrappers,
        },
      ],
    }),
  ],
})
export class DataEntryFormlyModule { }

export function dataEntrySubawardeeRepeaterRequired(control: FormControl): ValidationErrors {
  console.log(control.value, control, 'control')
  return control.value && control.value.items && control.value.length ? { required: true } : null;
}