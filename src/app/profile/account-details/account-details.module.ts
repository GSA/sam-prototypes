import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountDetailsRoutingModule
  ],
  exports: [AccountDetailsComponent]
})
export class AccountDetailsModule { }
