import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationLandingRoutingModule } from './entity-registration-landing-routing.module';
import { EntityRegistrationLandingComponent } from './entity-registration-landing.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [EntityRegistrationLandingComponent],
  imports: [
    CommonModule,
    EntityRegistrationLandingRoutingModule,
    SdsIconModule
  ],
  exports: [EntityRegistrationLandingComponent]
})
export class EntityRegistrationLandingModule { }
