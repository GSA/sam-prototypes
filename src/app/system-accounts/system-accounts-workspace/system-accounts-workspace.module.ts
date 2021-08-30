import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { SdsSideNavigationModule, SdsToolbarModule, SdsSearchModule } from "@gsa-sam/components";
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { DataEntryLayoutModule } from '../../app-layout/data-entry-layout/data-entry-layout.module';
import { WorkspaceLayoutModule } from '../../app-layout/workspace-layout/workspace-layout.module';

import { SystemAccountsFiltersComponent } from './system-accounts-filters.component';
import { SystemAccountItemModule } from "./system-account-item/system-account-item.module";
import { SystemAccountsWorkspaceRoutingModule } from "./system-accounts-workspace-routing.module";
import { SystemAccountsWorkspaceComponent } from "./system-accounts-workspace.component";

@NgModule({
  declarations: [SystemAccountsWorkspaceComponent, SystemAccountsFiltersComponent],
  imports: [
    CommonModule,
    RouterModule,
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
    DataEntryLayoutModule,
    WorkspaceLayoutModule,
    SystemAccountItemModule,
    SystemAccountsWorkspaceRoutingModule,
  ],
  exports: [SystemAccountsWorkspaceComponent, SystemAccountsFiltersComponent],
  providers: [SDSFormlyUpdateComunicationService],
})
export class SystemAccountsWorkspaceModule {}
