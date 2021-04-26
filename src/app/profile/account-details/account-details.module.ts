import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    AccountDetailsRoutingModule
  ],
  exports: [AccountDetailsComponent]
})
export class AccountDetailsModule { }
