import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule  } from '@gsa-sam/layouts';  

import {
	SdsSideNavigationModule,
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
  	SdsSearchModule
  } from '@gsa-sam/components';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { HelpItemModule } from './help-item/help-item.module';
import { HelpServiceModule } from './service/service.module';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormlyModule,
    FormsModule,
    SdsFiltersModule, 
    SdsSubheaderModule,
	SdsSideNavigationModule,
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
  	SearchListServiceModule,
  	SdsSearchModule,
  	HelpItemModule,
  	HelpServiceModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent],
  exports: []
})
export class HelpModule { }
