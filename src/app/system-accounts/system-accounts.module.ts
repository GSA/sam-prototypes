import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  SdsToolbarModule,
  SdsPageModule
} from '@gsa-sam/components';
import { SdsSubheaderModule } from '@gsa-sam/layouts';


import { SystemAccountsRoutingModule } from './system-accounts-routing.module';
import { SystemAccountsComponent } from './system-accounts.component';
import { SystemAccountsServiceModule } from './service/system-accounts-service.module';

@NgModule({
  declarations: [SystemAccountsComponent],
  imports: [
    CommonModule,
    SdsToolbarModule,
    SdsPageModule,
    SystemAccountsServiceModule,
    SdsSubheaderModule,
    SystemAccountsRoutingModule
  ],
  exports: [SystemAccountsComponent]
})
export class SystemAccountsModule { }
