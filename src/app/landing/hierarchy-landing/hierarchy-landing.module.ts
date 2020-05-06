import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SdsSearchModule
} from '@gsa-sam/components';

import { HierarchyLandingRoutingModule } from './hierarchy-landing-routing.module';
import { HierarchyLandingComponent } from './hierarchy-landing.component';

@NgModule({
  declarations: [HierarchyLandingComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    HierarchyLandingRoutingModule
  ],
  exports: [HierarchyLandingComponent]
})
export class HierarchyLandingModule { }
