import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { AccountEmailSettingsRoutingModule } from './account-email-settings-routing.module';
import { AccountEmailSettingsComponent } from './account-email-settings.component';


@NgModule({
  declarations: [AccountEmailSettingsComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    AccountEmailSettingsRoutingModule
  ],
  exports: [AccountEmailSettingsComponent]
})
export class AccountEmailSettingsModule { }
