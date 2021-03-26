import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsPageModule,
  SdsCollapseModule,
  SdsSearchModule,
  SdsIconModule,
  SdsSelectionPanelModule,
} from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import {
  SdsSubheaderModule,
  SearchListServiceModule,
  SideToolbarModule,
} from "@gsa-sam/layouts";
import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { AssistanceResultModule } from "./search-results/assistance-result/assistance-result.module";
import { ContractOpportunityResultModule } from "./search-results/contract-opportunity-result/contract-opportunity-result.module";
import { ContractDataResultModule } from "./search-results/contract-data-result/contract-data-result.module";
import { EntityRegistrationResultModule } from "./search-results/entity-registration-result/entity-registration-result.module";
import { ExclusionResultModule } from "./search-results/exclusion-result/exclusion-result.module";
import { HierarchyResultModule } from "./search-results/hierarchy-result/hierarchy-result.module";
import { IntegrityResultModule } from "./search-results/integrity-result/integrity-result.module";
import { WageResultModule } from "./search-results/wage-result/wage-result.module";

import { AllDomainFiltersModule } from "./search-filters/all-domain-filters/all-domain-filters.module";
import { AssistanceFiltersModule } from "./search-filters/assistance-filters/assistance-filters.module";
import { ContractOpportunityFiltersModule } from "./search-filters/contract-opportunity-filters/contract-opportunity-filters.module";
import { ContractDataFiltersModule } from "./search-filters/contract-data-filters/contract-data-filters.module";
import { EntityRegistrationFiltersModule } from "./search-filters/entity-registration-filters/entity-registration-filters.module";
import { EntityInformationFiltersModule } from "./search-filters/entity-information-filters/entity-information-filters.module";
import { DisasterResponseFiltersModule } from "./search-filters/disaster-response-filters/disaster-response-filters.module";
import { ExclusionFiltersModule } from "./search-filters/exclusion-filters/exclusion-filters.module";
import { IntegrityFiltersModule } from "./search-filters/integrity-filters/integrity-filters.module";
import { WageFiltersModule } from "./search-filters/wage-filters/wage-filters.module";

import { SearchServiceModule } from "../services/search-service/search-service.module";
import { AdvancedFiltersModule } from "./search-filters/advanced-filters/advanced-filters.module";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,

    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsCollapseModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    AssistanceResultModule,
    ContractOpportunityResultModule,
    ContractDataResultModule,
    EntityRegistrationResultModule,
    ExclusionResultModule,
    HierarchyResultModule,
    IntegrityResultModule,
    WageResultModule,
    AllDomainFiltersModule,
    AssistanceFiltersModule,
    ContractOpportunityFiltersModule,
    ContractDataFiltersModule,
    EntityRegistrationFiltersModule,
    EntityInformationFiltersModule,
    DisasterResponseFiltersModule,
    ExclusionFiltersModule,
    IntegrityFiltersModule,
    WageFiltersModule,
    SearchServiceModule,
    SearchRoutingModule,
    AdvancedFiltersModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    SideToolbarModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
