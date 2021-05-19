import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyProfileRoutingModule } from './federal-hierarchy-profile-routing.module';
import { FederalHierarchyProfileComponent } from './federal-hierarchy-profile.component';



@NgModule({
  declarations: [FederalHierarchyProfileComponent],
  imports: [
    CommonModule,
    FederalHierarchyProfileRoutingModule
  ],
  exports: [FederalHierarchyProfileComponent]
})
export class FederalHierarchyProfileModule { }
