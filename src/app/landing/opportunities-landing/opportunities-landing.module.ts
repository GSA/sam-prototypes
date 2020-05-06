import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSearchModule
} from '@gsa-sam/components';

import { OpportunitiesLandingRoutingModule } from './opportunities-landing-routing.module';
import { OpportunitiesLandingComponent } from './opportunities-landing.component';

@NgModule({
  declarations: [OpportunitiesLandingComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    RouterModule,
    OpportunitiesLandingRoutingModule
  ],
  exports: [OpportunitiesLandingComponent]
})
export class OpportunitiesLandingModule { }
