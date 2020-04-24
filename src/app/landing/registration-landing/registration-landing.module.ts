import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationLandingRoutingModule } from './registration-landing-routing.module';
import { RegistrationLandingComponent } from './registration-landing.component';

@NgModule({
  declarations: [RegistrationLandingComponent],
  imports: [
    CommonModule,
    RegistrationLandingRoutingModule
  ],
  exports: [RegistrationLandingComponent]
})
export class RegistrationLandingModule { }
