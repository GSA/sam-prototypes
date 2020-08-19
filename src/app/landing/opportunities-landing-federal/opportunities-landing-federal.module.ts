import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OpportunitiesLandingFederalRoutingModule } from './opportunities-landing-federal-routing.module';
import { OpportunitiesLandingFederalComponent } from './opportunities-landing-federal.component';

@NgModule({
  declarations: [OpportunitiesLandingFederalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OpportunitiesLandingFederalRoutingModule
  ],
  exports: [OpportunitiesLandingFederalComponent]
})
export class OpportunitiesLandingFederalModule { }
