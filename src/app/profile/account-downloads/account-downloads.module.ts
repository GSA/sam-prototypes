import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDownloadsRoutingModule } from './account-downloads-routing.module';
import { AccountDownloadsComponent } from './account-downloads.component';


@NgModule({
  declarations: [AccountDownloadsComponent],
  imports: [
    CommonModule,
    AccountDownloadsRoutingModule
  ],
  exports: [AccountDownloadsComponent]
})
export class AccountDownloadsModule { }
