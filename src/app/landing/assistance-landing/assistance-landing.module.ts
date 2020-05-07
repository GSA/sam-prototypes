import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSearchModule
} from '@gsa-sam/components';

import { AssistanceLandingRoutingModule } from './assistance-landing-routing.module';
import { AssistanceLandingComponent } from './assistance-landing.component';

@NgModule({
  declarations: [AssistanceLandingComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    RouterModule,
    AssistanceLandingRoutingModule
  ],
  exports: [AssistanceLandingComponent]
})
export class AssistanceLandingModule { }
