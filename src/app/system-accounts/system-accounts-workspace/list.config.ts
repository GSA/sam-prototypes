import { SearchListConfiguration } from '@gsa-sam/layouts';

export let systemAccountsListConfig: SearchListConfiguration = {
  defaultSortValue: "expirationDateDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Expiration Date (Nearest)", value: "expirationDateDescending" },
      { text: "Expiration Date (Farthest)", value: "expirationDateAscending" },
      { text: "System Account Name (A - Z)", value: "nameAscending" },
      { text: "System Account Name (Z - A)", value: "nameDescending" }
    ]
}