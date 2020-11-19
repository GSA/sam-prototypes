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

import { HierarchyLandingRoutingModule } from './hierarchy-landing-routing.module';
import { HierarchyLandingComponent } from './hierarchy-landing.component';

@NgModule({
  declarations: [HierarchyLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    HierarchyLandingRoutingModule,
    SdsIconModule
  ],
  exports: [HierarchyLandingComponent]
})
export class HierarchyLandingModule { }
