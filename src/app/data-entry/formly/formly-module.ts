import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SdsFormlyModule, sdsWrappers } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";

import { FormlyFieldStepperComponent } from "./formly-stepper";
import { StepperModule } from "../stepper/stepper.module";
import { CdkStepperModule } from "@angular/cdk/stepper";
//import { AgencyModalModule } from '../agency-picker/agency-modal/agency-modal.module';

@NgModule({
  declarations: [FormlyFieldStepperComponent],
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule.forRoot(),
    SdsFormlyModule.forChild({
      types: [
        {
          name: "stepper",
          component: FormlyFieldStepperComponent,
          wrappers: sdsWrappers,
        },
      ],
    }),
  ],
})
export class PrototypeFormlyModule {}
