import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsDialogModule
} from '@gsa-sam/components';

import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { DatabankSearchRoutingModule } from './databank-search-routing.module';
import { DatabankSearchComponent } from './databank-search.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule,
    FormlySelectModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSearchModule,
    SdsDialogModule,
    SdsToolbarModule,
    SdsSideNavigationModule,
    SdsFiltersModule,
    DatabankSearchRoutingModule
  ],
  declarations: [DatabankSearchComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class DatabankSearchModule { }
