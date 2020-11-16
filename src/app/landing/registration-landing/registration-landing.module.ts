import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule
} from '@gsa-sam/components';

import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

import { RegistrationLandingRoutingModule } from './registration-landing-routing.module';
import { RegistrationLandingComponent } from './registration-landing.component';

@NgModule({
  declarations: [RegistrationLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    SdsVideoPlayerModule,
    RegistrationLandingRoutingModule,
    SdsIconModule
  ],
  exports: [RegistrationLandingComponent]
})
export class RegistrationLandingModule { }
