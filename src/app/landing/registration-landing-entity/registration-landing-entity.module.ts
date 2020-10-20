import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationLandingEntityRoutingModule } from './registration-landing-entity-routing.module';
import { RegistrationLandingEntityComponent } from './registration-landing-entity.component';

@NgModule({
  declarations: [RegistrationLandingEntityComponent],
  imports: [
    CommonModule,
    RegistrationLandingEntityRoutingModule
  ],
  exports: [RegistrationLandingEntityComponent]
})
export class RegistrationLandingEntityModule { }
