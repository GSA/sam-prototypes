import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
	SdsSideNavigationModule,
	SdsToolbarModule,
	SdsAccordionModule,
	SdsPageModule,
	SdsSubheaderModule,    
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
