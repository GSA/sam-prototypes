import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesLandingRoutingModule } from './opportunities-landing-routing.module';
import { OpportunitiesLandingComponent } from './opportunities-landing.component';

@NgModule({
  declarations: [OpportunitiesLandingComponent],
  imports: [
    CommonModule,
    OpportunitiesLandingRoutingModule
  ],
  exports: [OpportunitiesLandingComponent]
})
export class OpportunitiesLandingModule { }
