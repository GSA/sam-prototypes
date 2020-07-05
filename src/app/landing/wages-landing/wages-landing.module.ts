import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule
  } from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';  

import { WagesLandingRoutingModule } from './wages-landing-routing.module';
import { WagesLandingComponent } from './wages-landing.component';
import { WagesSubPagesComponent } from './wages-sub-pages.component';

@NgModule({
  declarations: [WagesLandingComponent, WagesSubPagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    WagesLandingRoutingModule
  ],
  exports: [WagesLandingComponent, WagesSubPagesComponent]
})
export class WagesLandingModule { }
