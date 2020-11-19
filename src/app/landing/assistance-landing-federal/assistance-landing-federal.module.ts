import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AssistanceLandingFederalRoutingModule } from './assistance-landing-federal-routing.module';
import { AssistanceLandingFederalComponent } from './assistance-landing-federal.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [AssistanceLandingFederalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AssistanceLandingFederalRoutingModule,
    SdsIconModule
  ],
  exports: [AssistanceLandingFederalComponent]
})
export class AssistanceLandingFederalModule { }
