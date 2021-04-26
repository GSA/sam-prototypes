import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { AccountEmailSettingsRoutingModule } from './account-email-settings-routing.module';
import { AccountEmailSettingsComponent } from './account-email-settings.component';


@NgModule({
  declarations: [AccountEmailSettingsComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    SdsTableModule,
    AccountEmailSettingsRoutingModule
  ],
  exports: [AccountEmailSettingsComponent],
  bootstrap: [AccountEmailSettingsComponent]
})
export class AccountEmailSettingsModule { }
