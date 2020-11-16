import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  SdsSearchModule,
  SdsIconModule
} from '@gsa-sam/components';

import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

import { IntegrityLandingRoutingModule } from './integrity-landing-routing.module';
import { IntegrityLandingComponent } from './integrity-landing.component';

@NgModule({
  declarations: [IntegrityLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    IntegrityLandingRoutingModule,
    SdsIconModule
  ],
  exports: [IntegrityLandingComponent]
})
export class IntegrityLandingModule { }
