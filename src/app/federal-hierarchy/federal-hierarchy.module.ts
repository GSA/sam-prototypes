import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { SdsSideNavigationModule, SdsToolbarModule, SdsSearchModule } from "@gsa-sam/components";
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { AppLayoutModule } from '../app-layout/app-layout.module';
import { WorkspaceLayoutModule } from '../app-layout/workspace-layout/workspace-layout.module';

import { FederalHierarchyRoutingModule } from './federal-hierarchy-routing.module';
import { FederalHierarchyComponent } from './federal-hierarchy.component';
import { HierarchyServiceModule } from '../services/hierarchy-service/hierarchy-service.module';
import { FederalHierarchyFiltersComponent } from './federal-hierarchy-filters.component';


@NgModule({
  declarations: [FederalHierarchyComponent, FederalHierarchyFiltersComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    AppLayoutModule,
    WorkspaceLayoutModule,
    HierarchyServiceModule,
    FederalHierarchyRoutingModule
  ],
  exports: [FederalHierarchyComponent, FederalHierarchyFiltersComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class FederalHierarchyModule { }
