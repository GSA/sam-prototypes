import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { Subject } from "rxjs";

import {
  SdsCollapseModule,
  SdsSearchModule
} from "@gsa-sam/components";
import { SdsFiltersModule } from "@gsa-sam/sam-formly";
import {
  SdsSubheaderModule,
  SearchListServiceModule,
  SideToolbarModule,
} from "@gsa-sam/layouts";
import { SdsButtonGroupModule } from "@gsa-sam/sam-material-extensions";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { AppLayoutModule } from "../../app-layout/app-layout.module";
import { ComponentsModule } from "../../components/components.module";

import { EntityReportingServiceModule } from "../../services/entity-reporting-service/entity-reporting-service.module";

import { AwardWorkspaceRoutingModule } from "./award-workspace-routing.module";
import { AwardWorkspaceComponent } from "./award-workspace.component";
import { AwardItemComponent } from "./award-item.component";
import { ResponsiveSidebarComponent } from "../../app-layout/responsive-sidebar.component";
import { SearchResultComponent } from "../../app-layout/search-result.component";

@NgModule({
  declarations: [
    AwardWorkspaceComponent,
    AwardItemComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    AppLayoutModule,
    ComponentsModule,
    SdsSearchModule,
    SdsButtonGroupModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    SideToolbarModule,
    EntityReportingServiceModule,
    AwardWorkspaceRoutingModule,
  ],
  exports: [AwardWorkspaceComponent, AwardItemComponent],
})
export class AwardWorkspaceModule { }
