import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { AccountRolesRoutingModule } from './account-roles-routing.module';
import { AccountRolesComponent } from './account-roles.component';

@NgModule({
  declarations: [AccountRolesComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    SdsTableModule,
    AccountRolesRoutingModule
  ],
  exports: [AccountRolesComponent]
})
export class AccountRolesModule { }
