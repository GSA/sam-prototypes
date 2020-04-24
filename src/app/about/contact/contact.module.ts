import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
  	SdsSideNavigationModule,
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
  	SdsSubheaderModule,    
    ContactRoutingModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
