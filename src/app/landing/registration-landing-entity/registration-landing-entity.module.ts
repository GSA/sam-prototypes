import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationLandingEntityRoutingModule } from './registration-landing-entity-routing.module';
import { RegistrationLandingEntityComponent } from './registration-landing-entity.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [RegistrationLandingEntityComponent],
  imports: [
    CommonModule,
    RegistrationLandingEntityRoutingModule,
    IconModule
  ],
  exports: [RegistrationLandingEntityComponent]
})
export class RegistrationLandingEntityModule { }
