import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyHistoryRoutingModule } from './federal-hierarchy-history-routing.module';
import { FederalHierarchyHistoryComponent } from './federal-hierarchy-history.component';


@NgModule({
  declarations: [FederalHierarchyHistoryComponent],
  imports: [
    CommonModule,
    FederalHierarchyHistoryRoutingModule
  ],
  exports: [FederalHierarchyHistoryComponent]
})
export class FederalHierarchyHistoryModule { }
