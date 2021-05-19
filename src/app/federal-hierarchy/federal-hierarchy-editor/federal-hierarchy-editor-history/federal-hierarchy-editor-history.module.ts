import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyEditorHistoryRoutingModule } from './federal-hierarchy-editor-history-routing.module';
import { FederalHierarchyEditorHistoryComponent } from './federal-hierarchy-editor-history.component';


@NgModule({
  declarations: [FederalHierarchyEditorHistoryComponent],
  imports: [
    CommonModule,
    FederalHierarchyEditorHistoryRoutingModule
  ],
  exports: [FederalHierarchyEditorHistoryComponent]
})
export class FederalHierarchyEditorHistoryModule { }
