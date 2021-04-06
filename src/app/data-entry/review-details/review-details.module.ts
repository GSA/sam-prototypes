import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReviewDetailsRoutingModule } from "./review-details-routing.module";
import { ReviewDetailsComponent } from "./review-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";

@NgModule({
  declarations: [ReviewDetailsComponent],
  imports: [
    CommonModule,
    ReviewDetailsRoutingModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule.forRoot(),
  ],
  exports: [ReviewDetailsComponent],
})
export class ReviewDetailsModule {}
