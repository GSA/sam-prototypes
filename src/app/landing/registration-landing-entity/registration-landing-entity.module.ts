import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationLandingEntityRoutingModule } from './registration-landing-entity-routing.module';
import { RegistrationLandingEntityComponent } from './registration-landing-entity.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [RegistrationLandingEntityComponent],
  imports: [
    CommonModule,
    RegistrationLandingEntityRoutingModule,
    SdsIconModule
  ],
  exports: [RegistrationLandingEntityComponent]
})
export class RegistrationLandingEntityModule { }
