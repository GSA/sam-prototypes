import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SdsSideNavigationModule } from "@gsa-sam/components";

import { ComponentsModule } from '../../components/components.module';
import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { DataEntryLayoutModule } from '../../app-layout/data-entry-layout/data-entry-layout.module';

import { HierarchyServiceModule } from '../../services/hierarchy-service/hierarchy-service.module';

import { FederalHierarchyEditorRoutingModule } from './federal-hierarchy-editor-routing.module';
import { FederalHierarchyEditorComponent } from './federal-hierarchy-editor.component';


@NgModule({
  declarations: [FederalHierarchyEditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    AppLayoutModule,
    DataEntryLayoutModule,
    ComponentsModule,
    HierarchyServiceModule,
    FederalHierarchyEditorRoutingModule
  ],
  exports: [FederalHierarchyEditorComponent]
})
export class FederalHierarchyEditorModule { }
