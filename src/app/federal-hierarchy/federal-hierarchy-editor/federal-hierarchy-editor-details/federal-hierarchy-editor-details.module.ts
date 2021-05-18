import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HierarchyServiceModule } from '../../../services/hierarchy-service/hierarchy-service.module';

import { FederalHierarchyEditorDetailsRoutingModule } from './federal-hierarchy-editor-details-routing.module';
import { FederalHierarchyEditorDetailsComponent } from './federal-hierarchy-editor-details.component';


@NgModule({
  declarations: [FederalHierarchyEditorDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HierarchyServiceModule,
    FederalHierarchyEditorDetailsRoutingModule
  ],
  exports: [FederalHierarchyEditorDetailsComponent]
})
export class FederalHierarchyEditorDetailsModule { }
