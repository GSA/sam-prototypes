import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterResponseLandingRoutingModule } from './disaster-response-landing-routing.module';
import { DisasterResponseLandingComponent } from './disaster-response-landing.component';

@NgModule({
  declarations: [DisasterResponseLandingComponent],
  imports: [
    CommonModule,
    DisasterResponseLandingRoutingModule
  ],
  exports: [DisasterResponseLandingComponent]
})
export class DisasterResponseLandingModule { }
