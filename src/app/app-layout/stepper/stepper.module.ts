import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsIconModule } from "@gsa-sam/components";
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
    SdsIconModule,
    CdkStepperModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x }),
  ],
  exports: [StepperComponent],
})
export class StepperModule {}
