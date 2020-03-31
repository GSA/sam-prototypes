import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchHomeRoutingModule } from './search-home-routing.module';
import { SearchHomeComponent } from './search-home.component';

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

import { SearchServiceModule } from './search-service/search-service.module';

import { OpportunityResultModule } from './opportunity/opportunity-result/opportunity-result.module';
import { AssistanceResultModule } from './assistance/assistance-result/assistance-result.module';
import { EntityResultModule } from './entity-info/entity-result/entity-result.module';
import { WageResultModule } from './wages/wage-result/wage-result.module';
import { ContractDataResultModule } from './contract-data/contract-data-result/contract-data-result.module';

import { AdvancedFiltersModule } from './advanced-filters/advanced-filters.module';
import { AllDomainFiltersModule } from './all-domain-filters/all-domain-filters.module';
import { OpportunityFilterServiceModule } from './opportunity/opportunity-filter-service/opportunity-filter-service.module';
import { AssistanceFiltersModule } from './assistance/assistance-filters/assistance-filters.module';
import { EntityFilterServiceModule } from './entity-info/entity-filter-service/entity-filter-service.module';
import { ContractDataFiltersModule } from './contract-data/contract-data-filters/contract-data-filters.module';

@NgModule({
  declarations: [SearchHomeComponent],
  imports: [    
    CommonModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsDialogModule,
    SdsToolbarModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    FormsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule,
    SearchHomeRoutingModule,
    SearchServiceModule,
    OpportunityResultModule,
    AssistanceResultModule,
    EntityResultModule,
    WageResultModule,
    ContractDataResultModule,
    AdvancedFiltersModule,
    AllDomainFiltersModule,
    OpportunityFilterServiceModule,
    AssistanceFiltersModule,
    EntityFilterServiceModule,
    ContractDataFiltersModule
  ],
  providers: [SDSFormlyUpdateComunicationService]
})
export class SearchHomeModule { }
