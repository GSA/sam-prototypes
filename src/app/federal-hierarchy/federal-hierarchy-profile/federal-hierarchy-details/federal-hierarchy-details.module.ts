import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyDetailsRoutingModule } from './federal-hierarchy-details-routing.module';
import { FederalHierarchyDetailsComponent } from './federal-hierarchy-details.component';


@NgModule({
  declarations: [FederalHierarchyDetailsComponent],
  imports: [
    CommonModule,
    FederalHierarchyDetailsRoutingModule
  ],
  exports: [FederalHierarchyDetailsComponent]
})
export class FederalHierarchyDetailsModule { }
