import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule
  } from '@gsa-sam/components';

import { WagesSubMenuComponent } from './wages-sub-menu.component';

@NgModule({
  declarations: [WagesSubMenuComponent],
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule
  ],
  exports: [   
  	WagesSubMenuComponent
  ]
})
export class WagesSubMenuModule { }
