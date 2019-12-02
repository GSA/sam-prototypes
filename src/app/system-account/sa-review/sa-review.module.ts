import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaReviewRoutingModule } from './sa-review-routing.module';
import { SaReviewComponent } from './sa-review.component';

@NgModule({
  declarations: [SaReviewComponent],
  imports: [
    CommonModule,
    SaReviewRoutingModule
  ],
  exports: [SaReviewComponent]
})
export class SaReviewModule { }
