import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { SdsIconModule } from "@gsa-sam/components";
import { StepperComponent } from "./stepper.component";
import { CdkStepperModule } from "@angular/cdk/stepper";
// Component

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, SdsIconModule, CdkStepperModule],
  exports: [StepperComponent],
})
export class StepperModule {}
