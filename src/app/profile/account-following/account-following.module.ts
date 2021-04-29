import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { ComponentsModule } from '../../components/components.module';

import { AccountFollowingRoutingModule } from './account-following-routing.module';
import { AccountFollowingComponent } from './account-following.component';


@NgModule({
  declarations: [AccountFollowingComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    ComponentsModule,
    AccountFollowingRoutingModule
  ],
  exports: [AccountFollowingComponent]
})
export class AccountFollowingModule { }
