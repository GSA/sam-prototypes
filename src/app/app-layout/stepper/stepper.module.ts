import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { StepperComponent } from "./stepper.component";
import { CdkStepperModule } from "@angular/cdk/stepper";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
} from "ngx-bootstrap-icons";
// Component

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    IconModule,
    CdkStepperModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x }),
  ],
  exports: [StepperComponent],
})
export class StepperModule { }
