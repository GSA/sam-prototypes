import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { SystemAccountDataModule } from './system-account-data/system-account-data.module';
import { SystemAccountRoutingModule } from './system-account-routing.module';
import { SystemAccountComponent } from './system-account.component';

@NgModule({
  declarations: [SystemAccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSubheaderModule,
    SystemAccountDataModule,
    SystemAccountRoutingModule
  ],
  exports: [SystemAccountComponent]
})
export class SystemAccountModule { }
