import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHistoryRoutingModule } from './account-history-routing.module';
import { AccountHistoryComponent } from './account-history.component';

@NgModule({
  declarations: [AccountHistoryComponent],
  imports: [
    CommonModule,
    AccountHistoryRoutingModule
  ],
  exports: [AccountHistoryComponent]
})
export class AccountHistoryModule { }
