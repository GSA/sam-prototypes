import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubheaderModule } from '../../app-layout/subheader/subheader.module';
import { SystemAccountDetailsModule } from '../system-account-details/system-account-details.module';

import { SystemAccountRequestRoutingModule } from './system-account-request-routing.module';
import { SystemAccountRequestComponent } from './system-account-request.component';


@NgModule({
  declarations: [
    SystemAccountRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SubheaderModule,
    SystemAccountDetailsModule,
    SystemAccountRequestRoutingModule
  ],
  exports: [
    SystemAccountRequestComponent
  ]
})
export class SystemAccountRequestModule { }
