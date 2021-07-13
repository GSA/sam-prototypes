import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountReviewRoutingModule } from './system-account-review-routing.module';
import { SystemAccountReviewComponent } from './system-account-review.component';


@NgModule({
  declarations: [SystemAccountReviewComponent],
  imports: [
    CommonModule,
    SystemAccountReviewRoutingModule
  ],
  exports: [SystemAccountReviewComponent]
})
export class SystemAccountReviewModule { }
