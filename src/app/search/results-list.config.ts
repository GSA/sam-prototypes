import { SearchListConfiguration } from '@gsa-sam/layouts';

let allDomainsConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" }
    ]
}

let assistanceListingsConfig: SearchListConfiguration = {
    defaultSortValue: "relevanceDescending",
    pageSize: 25,
    sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Published Date", value: "dateDescending" },
      { text: "Title: A - Z", value: "titleAscending" },
      { text: "Title: Z - A", value: "titleDescending" },
      { text: "CFDA Number: Low - High", value: "cfdaNumberAscending" },
      { text: "CFDA Number: High - Low", value: "cfdaNumberDescending" }
    ]
};

let contractOpportunitiesConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Last Updated Date", value: "dateDescending" },
      { text: "Title: A - Z", value: "nameAscending" },
      { text: "Title: Z - A", value: "nameDescending" }
    ]
}

let contractDataConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Signed Date", value: "dateSignedDescending" },
      { text: "Last Modified Date", value: "dateModifiedDescending" },
      { text: "Action Obligation: High - Low", value: "obligationDescending"},
      { text: "Action Obligation: Low - High", value: "obligationAscending" },
      { text: "Contract Fiscal Year: High - Low", value: "fyDescending" },
      { text: "Contract Fiscal Year: Low - High", value: "fyAscending" }
    ]
}

let entityInformationConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Name (A - Z)", value: "nameAscending" },
      { text: "Name (Z - A)", value: "nameDescending" },
      { text: "Unique Entity ID: Low - High", value: "ueiAscending" },
      { text: "Unique Entity ID: High - Low", value: "ueiDescending" }
    ]
};

let entityRegistrationConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
      [
        { text: "Relevance", value: "relevanceDescending" },
        { text: "Expiration Date: New - Old", value: "dateDescending" },
        { text: "Expiration Date Old - New", value: "dateAscending" },
        { text: "Entity Name: A - Z", value: "nameAscending" },
        { text: "Entity Name: Z - A", value: "nameDescending" },
        { text: "Unique Entity ID: Low - High", value: "ueiAscending" },
        { text: "Unique Entity ID: High - Low", value: "ueiDescending" }
      ]
};

let exclusionsConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Name: A - Z", value: "nameAscending" },
      { text: "Name: Z - A", value: "nameDescending" },
      { text: "Unique Entity ID: Low - High", value: "ueiAscending" },
      { text: "Unique Entity ID: High - Low", value: "ueiDescending" },
      { text: "Termination Date", value: "dateDescending" }
    ]
};


let integrityInformationConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Unique Entity ID: Low - High", value: "ueiAscending" },
      { text: "Unique Entity ID: High - Low", value: "ueiDescending" },
      { text: "Name: A - Z", value: "nameAscending" },
      { text: "Name: Z - A", value: "nameDescending" },
      { text: "Termination Date", value: "dateDescending" }
    ]
};

let wagesByIDConfig: SearchListConfiguration = {
  defaultSortValue: "nameAscendingDescending",
  pageSize: 25,
  sortList:
    [
      { text: "WD Number: Low - High", value: "nameAscending" },
      { text: "WD Number: High - Low", value: "nameDescending" },
      { text: "Last Revised Date", value: "lastRevisedDescending" }
    ]
};

let wagesWorkflowConfig: SearchListConfiguration = {
  defaultSortValue: "nameAscendingDescending",
  pageSize: 25,
  sortList:
    [
      { text: "WD Number: Low - High", value: "nameAscending" },
      { text: "WD Number: High - Low", value: "nameDescending" },
      { text: "Last Revised Date", value: "lastRevisedDescending" }
    ]
};

export let resultsListConfigMap = new Map([
  ['all', allDomainsConfig],
  ['entityinfo', entityInformationConfig],
  ['registrations', entityRegistrationConfig],
  ['disasterresponse', entityRegistrationConfig],
  ['exclusions', exclusionsConfig],
  ['integrity', integrityInformationConfig],
  ['assistancelist', assistanceListingsConfig],
  ['opportunities', contractOpportunitiesConfig],
  ['contractdata', contractDataConfig],
  ['wdid', wagesByIDConfig],
  ['dba', wagesWorkflowConfig],
  ['sca', wagesWorkflowConfig]
]);
