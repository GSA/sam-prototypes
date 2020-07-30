import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SdsSearchModule
} from '@gsa-sam/components';

import { FederalHierarchyLandingRoutingModule } from './federal-hierarchy-landing-routing.module';
import { FederalHierarchyLandingComponent } from './federal-hierarchy-landing.component';

@NgModule({
  declarations: [FederalHierarchyLandingComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    FederalHierarchyLandingRoutingModule
  ],
  exports: [FederalHierarchyLandingComponent]
})
export class FederalHierarchyLandingModule { }
