import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormsModule,
  ValidationErrors,
  FormControl,
} from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";

import { CdkStepperModule } from "@angular/cdk/stepper";
import { FormlySubawardComponent } from "./formly-subaward";
import { FormlyContractComponent } from "./formly-contract";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { SubawardDataComponent } from "../subaward-data/subaward-data.component";
import { ReviewContractComponent } from "../review-contract/review-contract.component";

import { SdsActionsMenuModule } from "@gsa-sam/components";
import { ExpandableCardModule } from "../../app-layout/card/card.module";
import { FormlyCustomComponent } from "./formly-custom";
import { SubawardeeRepeatTypeComponent } from "./repeat-section";
import { SubawardeeReadOnlyRepeatTypeComponent } from "./readonly-repeat-section";

@NgModule({
  declarations: [
    FormlyContractComponent,
    FormlySubawardComponent,
    SubawardDataComponent,
    ReviewContractComponent,
    FormlyCustomComponent,
    SubawardeeRepeatTypeComponent,
    SubawardeeReadOnlyRepeatTypeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    SdsActionsMenuModule,
    ExpandableCardModule,
    CdkStepperModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    IconModule,
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
          name: "repeat",
          component: SubawardeeRepeatTypeComponent,
          wrappers: sdsWrappers,
        },
        {
          name: "readonlyrepeat",
          component: SubawardeeReadOnlyRepeatTypeComponent,
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
export class DataEntryFormlyModule {}

export function dataEntrySubawardeeRepeaterRequired(
  control: FormControl,
  field: FormlyFieldConfig,
  model: any
): ValidationErrors {
  return field.parent.model.length ? { required: true } : { required: false };
}
