import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterResponseLandingRoutingModule } from './disaster-response-landing-routing.module';
import { DisasterResponseLandingComponent } from './disaster-response-landing.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [DisasterResponseLandingComponent],
  imports: [
    CommonModule,
    DisasterResponseLandingRoutingModule,
    IconModule
  ],
  exports: [DisasterResponseLandingComponent]
})
export class DisasterResponseLandingModule { }
