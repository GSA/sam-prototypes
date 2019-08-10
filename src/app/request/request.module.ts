import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    RequestRoutingModule
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }
