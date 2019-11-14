import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceLandingRoutingModule } from './assistance-landing-routing.module';
import { AssistanceLandingComponent } from './assistance-landing.component';

@NgModule({
  declarations: [AssistanceLandingComponent],
  imports: [
    CommonModule,
    AssistanceLandingRoutingModule
  ],
  exports: [AssistanceLandingComponent]
})
export class AssistanceLandingModule { }
