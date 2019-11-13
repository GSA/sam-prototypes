import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceLandingRoutingModule } from './compliance-landing-routing.module';
import { ComplianceLandingComponent } from './compliance-landing.component';

@NgModule({
  declarations: [ComplianceLandingComponent],
  imports: [
    CommonModule,
    ComplianceLandingRoutingModule
  ],
  exports: [ComplianceLandingComponent]
})
export class ComplianceLandingModule { }
