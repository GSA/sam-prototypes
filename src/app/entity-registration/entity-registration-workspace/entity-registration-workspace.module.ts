import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { SdsSideNavigationModule, SdsSearchModule } from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { AppLayoutModule } from "../../app-layout/app-layout.module";
import { WorkspaceLayoutModule } from "../../app-layout/workspace-layout/workspace-layout.module";

import { EntityRegistrationServiceModule } from "../../services/entity-registration-service/entity-registration-service.module";
import { EntityRegistrationWorkspaceRoutingModule } from "./entity-registration-workspace-routing.module";
import { EntityRegistrationWorkspaceComponent } from "./entity-registration-workspace.component";
import { EntityRegistrationFiltersComponent } from "./entity-registration-filters.component";

@NgModule({
  declarations: [
    EntityRegistrationWorkspaceComponent,
    EntityRegistrationFiltersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,

    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    AppLayoutModule,
    WorkspaceLayoutModule,
    EntityRegistrationServiceModule,
    EntityRegistrationWorkspaceRoutingModule,
  ],
  exports: [
    EntityRegistrationWorkspaceComponent,
    EntityRegistrationFiltersComponent,
  ],
  providers: [SDSFormlyUpdateComunicationService],
})
export class EntityRegistrationWorkspaceModule {}
