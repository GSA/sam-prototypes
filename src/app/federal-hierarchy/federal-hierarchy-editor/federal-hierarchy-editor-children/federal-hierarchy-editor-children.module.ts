import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchListServiceModule } from "@gsa-sam/layouts";

import { HierarchyServiceModule } from '../../../services/hierarchy-service/hierarchy-service.module';

import { FederalHierarchyEditorChildrenRoutingModule } from './federal-hierarchy-editor-children-routing.module';
import { FederalHierarchyEditorChildrenComponent } from './federal-hierarchy-editor-children.component';


@NgModule({
  declarations: [FederalHierarchyEditorChildrenComponent],
  imports: [
    CommonModule,
    RouterModule,
    SearchListServiceModule,
    HierarchyServiceModule,
    FederalHierarchyEditorChildrenRoutingModule
  ],
  exports: [FederalHierarchyEditorChildrenComponent]
})
export class FederalHierarchyEditorChildrenModule { }
