import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationLandingRoutingModule } from './entity-registration-landing-routing.module';
import { EntityRegistrationLandingComponent } from './entity-registration-landing.component';

@NgModule({
  declarations: [EntityRegistrationLandingComponent],
  imports: [
    CommonModule,
    EntityRegistrationLandingRoutingModule
  ],
  exports: [EntityRegistrationLandingComponent]
})
export class EntityRegistrationLandingModule { }
