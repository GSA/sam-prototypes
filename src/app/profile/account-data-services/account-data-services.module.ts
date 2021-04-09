import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';

import { AccountDataServicesRoutingModule } from './account-data-services-routing.module';
import { AccountDataServicesComponent } from './account-data-services.component';


@NgModule({
  declarations: [AccountDataServicesComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsActionsMenuModule,
    AppLayoutModule,
    AccountDataServicesRoutingModule
  ],
  exports: [AccountDataServicesComponent]
})
export class AccountDataServicesModule { }
