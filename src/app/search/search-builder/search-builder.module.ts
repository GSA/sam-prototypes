import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {
  SdsPageModule,
  SdsSearchModule,
  SdsCollapseModule
} from '@gsa-sam/components';

import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';

import { AssistanceResultModule } from '../search-results/assistance-result/assistance-result.module';
import { ContractOpportunityResultModule} from '../search-results/contract-opportunity-result/contract-opportunity-result.module';
import { ContractDataResultModule } from '../search-results/contract-data-result/contract-data-result.module';
import { EntityRegistrationResultModule } from '../search-results/entity-registration-result/entity-registration-result.module';
import { ExclusionResultModule } from '../search-results/exclusion-result/exclusion-result.module';
import { HierarchyResultModule } from '../search-results/hierarchy-result/hierarchy-result.module';
import { IntegrityResultModule } from '../search-results/integrity-result/integrity-result.module';
import { WageResultModule} from '../search-results/wage-result/wage-result.module';

import { SearchServiceModule } from '../../services/search-service/search-service.module';

import { SearchBuilderRoutingModule } from './search-builder-routing.module';
import { SearchBuilderComponent } from './search-builder.component';

@NgModule({
  declarations: [SearchBuilderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSubheaderModule,
    SdsCollapseModule,
    SearchListServiceModule,
    AssistanceResultModule,
    ContractOpportunityResultModule,
    ContractDataResultModule,
    EntityRegistrationResultModule,
    ExclusionResultModule,
    HierarchyResultModule,
    IntegrityResultModule,
    WageResultModule,
    SearchBuilderRoutingModule
  ],
  exports: [SearchBuilderComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class SearchBuilderModule { }
