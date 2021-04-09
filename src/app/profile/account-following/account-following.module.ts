import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountFollowingRoutingModule } from './account-following-routing.module';
import { AccountFollowingComponent } from './account-following.component';


@NgModule({
  declarations: [AccountFollowingComponent],
  imports: [
    CommonModule,
    AccountFollowingRoutingModule
  ],
  exports: [AccountFollowingComponent]
})
export class AccountFollowingModule { }
