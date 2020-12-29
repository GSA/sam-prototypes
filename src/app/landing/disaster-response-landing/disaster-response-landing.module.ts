import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterResponseLandingRoutingModule } from './disaster-response-landing-routing.module';
import { DisasterResponseLandingComponent } from './disaster-response-landing.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [DisasterResponseLandingComponent],
  imports: [
    CommonModule,
    DisasterResponseLandingRoutingModule,
    SdsIconModule
  ],
  exports: [DisasterResponseLandingComponent]
})
export class DisasterResponseLandingModule { }
