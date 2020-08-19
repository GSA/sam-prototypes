import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRolesRoutingModule } from './account-roles-routing.module';
import { AccountRolesComponent } from './account-roles.component';

@NgModule({
  declarations: [AccountRolesComponent],
  imports: [
    CommonModule,
    AccountRolesRoutingModule
  ],
  exports: [AccountRolesComponent]
})
export class AccountRolesModule { }
