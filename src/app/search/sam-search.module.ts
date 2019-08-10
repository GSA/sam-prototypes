import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchRoutingModule } from './sam-search-routing.module';
import { SearchServiceModule } from './service/service.module';
import { SamSearchComponent } from './sam-search.component';

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

@NgModule({
  imports: [
    CommonModule,
    SamSearchRoutingModule,
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
    SearchServiceModule.forRoot()
  ],
  exports: [
  	SamSearchComponent
  ],
  declarations: [SamSearchComponent]
})
export class SamSearchModule { }
