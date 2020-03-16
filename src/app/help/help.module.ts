import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SdsSubheaderModule  } from '@gsa-sam/layouts';  

import {
	SdsSideNavigationModule,
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
    SdsSearchModule
  } from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { HelpServiceModule } from './service/service.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlySelectModule,
    SdsFiltersModule, 
    SdsSubheaderModule,
	  SdsSideNavigationModule,
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
    SdsSearchModule,
  	HelpServiceModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent],
  exports: [],
  providers: [SDSFormlyUpdateComunicationService]
})
export class HelpModule { }
