import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReviewDetailsRoutingModule } from "./review-details-routing.module";
import { ReviewDetailsComponent } from "./review-details.component";

@NgModule({
  declarations: [ReviewDetailsComponent],
  imports: [CommonModule, ReviewDetailsRoutingModule],
  exports: [ReviewDetailsComponent],
})
export class ReviewDetailsModule {}
