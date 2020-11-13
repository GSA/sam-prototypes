import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SdsIconModule
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
