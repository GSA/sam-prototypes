import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { StepperModule } from "../stepper/stepper.module";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { FormlySubawardComponent } from "./formly-subaward";
import { FormlyContractComponent } from "./formly-contract";
import { SdsIconModule } from "@gsa-sam/components";
import { SubawardDataComponent } from "../subaward-data/subaward-data.component";
import { ReviewContractComponent } from "../review-contract/review-contract.component";
import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";

@NgModule({
  declarations: [
    FormlyContractComponent,
    FormlySubawardComponent,
    SubawardDataComponent,
    ReviewContractComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    SdsActionsMenuModule,
    CardModule,
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
      ],
    }),
  ],
})
export class DataEntryFormlyModule {}
