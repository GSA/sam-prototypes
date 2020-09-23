import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSearchModule,
  SdsVideoPlayerModule
} from '@gsa-sam/components';

import { OpportunitiesLandingFederalRoutingModule } from './opportunities-landing-federal-routing.module';
import { OpportunitiesLandingFederalComponent } from './opportunities-landing-federal.component';

@NgModule({
  declarations: [OpportunitiesLandingFederalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    OpportunitiesLandingFederalRoutingModule
  ],
  exports: [OpportunitiesLandingFederalComponent]
})
export class OpportunitiesLandingFederalModule { }
