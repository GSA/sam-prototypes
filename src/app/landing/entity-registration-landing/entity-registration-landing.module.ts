import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationLandingRoutingModule } from './entity-registration-landing-routing.module';
import { EntityRegistrationLandingComponent } from './entity-registration-landing.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [EntityRegistrationLandingComponent],
  imports: [
    CommonModule,
    EntityRegistrationLandingRoutingModule,
    IconModule
  ],
  exports: [EntityRegistrationLandingComponent]
})
export class EntityRegistrationLandingModule { }
