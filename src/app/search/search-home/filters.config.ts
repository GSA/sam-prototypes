import { FormlyFieldConfig } from '@ngx-formly/core';

import { assistanceListConfig } from './assistance/assistance-result/assistance.config';
import { opportunitiesListConfig } from './opportunity/opportunity-result/opportunity.config';
import {
  entityInfoListConfig,
  registrationListConfig,
  exclusionListConfig,
  entityInfoFilters,
  registrationFilters,
  disasterResponseFilters,
  exclusionFilters
} from './entity-info/entity-result/entities.config';
import {
  wageListConfig, wdidFilters, dbaFilters, scaFilters
} from './wages/wage-result/wage.config';

import { SearchListConfiguration } from '@gsa-sam/layouts';


export let allDomainsListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" }
    ]
}

export let listConfigMap = new Map([
  ['all', allDomainsListConfig],
  ['entityinfo', entityInfoListConfig],
  ['registrations', registrationListConfig],
  ['disasterresponse', registrationListConfig],
  ['exclusions', exclusionListConfig],
  ['assistancelist', assistanceListConfig],
  ['opportunities', opportunitiesListConfig],
  ['wdid', wageListConfig],
  ['dba', wageListConfig],
  ['sca', wageListConfig]
]);

export let filterConfigMap = new Map([
  ['entityinfo', entityInfoFilters],
  ['registrations', registrationFilters],
  ['disasterresponse', disasterResponseFilters],
  ['exclusions', exclusionFilters],
  ['wdid', wdidFilters],
  ['dba', dbaFilters],
  ['sca', scaFilters]
]);
