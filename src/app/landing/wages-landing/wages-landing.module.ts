import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { SdsSideNavigationModule,
         SdsToolbarModule,
         SdsSearchModule,
         SdsAccordionModule,
         SdsVideoPlayerModule,
         SdsIconModule } from '@gsa-sam/components';

import { WagesLandingRoutingModule } from './wages-landing-routing.module';
import { WagesLandingComponent } from './wages-landing.component';
import { WagesSubPagesComponent } from './wages-sub-pages.component';
import { WagesSubMenuModule } from './wages-sub-menu/wages-sub-menu.module';



@NgModule({
  declarations: [WagesLandingComponent, WagesSubPagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSearchModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsVideoPlayerModule,
    FontAwesomeModule,
    WagesSubMenuModule,
    WagesLandingRoutingModule,
    SdsIconModule
  ],
  exports: [WagesLandingComponent, WagesSubPagesComponent]
})
export class WagesLandingModule { }
