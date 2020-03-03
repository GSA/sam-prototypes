import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { SystemAccountItemModule } from './system-account-item/system-account-item.module';
import { SystemAccountsWorkspaceRoutingModule } from './system-accounts-workspace-routing.module';
import { SystemAccountsServiceModule } from './system-accounts-service/system-accounts-service.module';
import { SystemAccountsWorkspaceComponent } from './system-accounts-workspace.component';

@NgModule({
  declarations: [SystemAccountsWorkspaceComponent],
  imports: [
    CommonModule,    
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    SystemAccountItemModule,
    SystemAccountsServiceModule,
    SystemAccountsWorkspaceRoutingModule
  ],
  exports: [SystemAccountsWorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class SystemAccountsWorkspaceModule { }
