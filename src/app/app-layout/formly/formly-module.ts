import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { FormlyFieldStepperComponent } from "./formly-stepper";
import { StepperModule } from "../stepper/stepper.module";
import { CdkStepperModule } from "@angular/cdk/stepper";

import { SdsIconModule } from "@gsa-sam/components";

import { ExpandableCardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";

@NgModule({
  declarations: [FormlyFieldStepperComponent],
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
          name: "stepper",
          component: FormlyFieldStepperComponent,
        },
      ],
    }),
  ],
})
export class AppLayoutFormlyModule { }
