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
import { ReportDetailsComponent } from "../report-details/report-details.component";
import { SubawardDataComponent } from "../subaward-data/subaward-data.component";
import { ReviewContractComponent } from "../review-contract/review-contract.component";
import { ReviewListItemChildSampleComponent } from "../review-contract/child-item.component";
import { ResultListItemChildSampleComponent } from "../subaward-data/child-item.component";
import { CardModule } from "../card/card.module";

@NgModule({
  declarations: [
    FormlyFieldStepperComponent,
    FormlyDetailsComponent,
    FormlyContractComponent,
    FormlySubawardComponent,
    ReportDetailsComponent,
    SubawardDataComponent,
    ReviewContractComponent,
    ReviewListItemChildSampleComponent,
    ResultListItemChildSampleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    CardModule,
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
