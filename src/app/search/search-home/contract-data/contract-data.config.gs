import { SearchListConfiguration } from '@gsa-sam/layouts';


export let contractDataListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Current Date Offers Due", value: "dateDescending" },
      { text: "Title (A - Z)", value: "titleAscending" },
      { text: "Title (Z - A)", value: "titleDescending" }
    ]
}