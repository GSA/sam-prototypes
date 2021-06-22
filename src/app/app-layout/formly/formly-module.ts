import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { FormlyFieldStepperComponent } from "./formly-stepper";
import { StepperModule } from "../stepper/stepper.module";
import { CdkStepperModule } from "@angular/cdk/stepper";

import { SdsIconModule } from "@gsa-sam/components";

import { ExpandableCardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { RepeatTypeComponent } from "./repeat-section";
import { ReadOnlyRepeatTypeComponent } from "./readonly-repeat-section";

@NgModule({
  declarations: [FormlyFieldStepperComponent, RepeatTypeComponent, ReadOnlyRepeatTypeComponent],
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
        {
          name: "repeat",
          component: RepeatTypeComponent,
          wrappers: sdsWrappers,
        },
        {
          name: "readonlyrepeat",
          component: ReadOnlyRepeatTypeComponent,
          wrappers: sdsWrappers,
        },
      ],
    }),
  ],
})
export class AppLayoutFormlyModule { }
