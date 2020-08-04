import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { SdsSideNavigationModule, 
         SdsToolbarModule, 
         SdsAccordionModule } from '@gsa-sam/components';

import { WagesLandingRoutingModule } from './wages-landing-routing.module';
import { WagesLandingComponent } from './wages-landing.component';
import { WagesSubPagesComponent } from './wages-sub-pages.component';
import { WagesSubMenuModule } from './wages-sub-menu/wages-sub-menu.module';



@NgModule({
  declarations: [WagesLandingComponent, WagesSubPagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    FontAwesomeModule,
    WagesSubMenuModule,
    WagesLandingRoutingModule
  ],
  exports: [WagesLandingComponent, WagesSubPagesComponent]
})
export class WagesLandingModule { }
