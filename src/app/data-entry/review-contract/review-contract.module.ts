import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewContractComponent } from "./review-contract.component";
import { ReviewContractRoutingModule } from "./review-contract-routing.module";
import { StepperModule } from "../stepper/stepper.module";
import {
  SdsIconModule,
  SdsPageModule,
  SdsSearchResultListModule,
} from "@gsa-sam/components";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { ReactiveFormsModule } from "@angular/forms";
import { ReviewListItemChildSampleComponent } from "./child-item.component";
@NgModule({
  declarations: [ReviewContractComponent, ReviewListItemChildSampleComponent],
  imports: [
    CommonModule,
    ReviewContractRoutingModule,
    SdsIconModule,
    StepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
  ],
  exports: [ReviewContractComponent, ReviewListItemChildSampleComponent],
})
export class ReviewContractModule {}
