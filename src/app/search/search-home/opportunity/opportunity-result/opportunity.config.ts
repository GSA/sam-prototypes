import { SearchListConfiguration } from '@gsa-sam/layouts';


export let opportunitiesListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Current Date Offers Due", value: "dateDescending" },
      { text: "Entity Name (A - Z)", value: "nameAscending" },
      { text: "Entity Name (Z - A)", value: "nameDescending" }
    ]
}