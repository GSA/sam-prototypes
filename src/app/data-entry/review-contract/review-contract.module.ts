import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewContractComponent } from "./review-contract.component";
import { ReviewContractRoutingModule } from "./review-contract-routing.module";

@NgModule({
  declarations: [ReviewContractComponent],
  imports: [CommonModule, ReviewContractRoutingModule],
  exports: [ReviewContractComponent],
})
export class ReviewContractModule {}
