import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyOfficeRoutingModule } from './federal-hierarchy-office-routing.module';
import { FederalHierarchyOfficeComponent } from './federal-hierarchy-office.component';


@NgModule({
  declarations: [FederalHierarchyOfficeComponent],
  imports: [
    CommonModule,
    FederalHierarchyOfficeRoutingModule
  ],
  exports: [FederalHierarchyOfficeComponent]
})
export class FederalHierarchyOfficeModule { }
