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

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

import { DatabankRoutingModule } from './databank-routing.module';
import { DatabankComponent } from './databank.component';


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
  	DatabankRoutingModule],
  declarations: [DatabankComponent]
})
export class DatabankModule {}
