import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationReviewRoutingModule } from './entity-registration-review-routing.module';
import { EntityRegistrationReviewComponent } from './entity-registration-review.component';


@NgModule({
  declarations: [EntityRegistrationReviewComponent],
  imports: [
    CommonModule,
    EntityRegistrationReviewRoutingModule
  ],
  exports: [EntityRegistrationReviewComponent]
})
export class EntityRegistrationReviewModule { }
