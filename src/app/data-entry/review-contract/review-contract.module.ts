import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewContractComponent } from "./review-contract.component";
import { ReviewContractRoutingModule } from "./review-contract-routing.module";
import { StepperModule } from "../stepper/stepper.module";
import { SdsIconModule } from "@gsa-sam/components";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [ReviewContractComponent],
  imports: [
    CommonModule,
    ReviewContractRoutingModule,
    SdsIconModule,
    StepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
  ],
  exports: [ReviewContractComponent],
})
export class ReviewContractModule {}
