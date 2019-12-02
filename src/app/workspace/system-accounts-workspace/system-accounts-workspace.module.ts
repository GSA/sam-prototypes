import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSubheaderModule, SearchListServiceModule  } from '@gsa-sam/layouts';  

import {
  	SdsPageModule,
  	SdsSearchModule
  } from '@gsa-sam/components';

import { SystemAccountDataModule } from '../../system-account/system-account-data/system-account-data.module';
import { SystemAccountItemModule } from './system-account-item/system-account-item.module';
import { SystemAccountsWorkspaceRoutingModule } from './system-accounts-workspace-routing.module';
import { SystemAccountsWorkspaceComponent } from './system-accounts-workspace.component';

@NgModule({
  declarations: [SystemAccountsWorkspaceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    SdsPageModule,
    SdsSearchModule,
    SystemAccountDataModule,
    SystemAccountItemModule,
    SystemAccountsWorkspaceRoutingModule
  ],
  exports: [SystemAccountsWorkspaceComponent]
})
export class SystemAccountsWorkspaceModule { }
