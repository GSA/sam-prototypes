import { Injectable } from '@angular/core';
import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import { AlertServiceModule } from './alert-service.module';
import { Alerts } from './alert.data';
import { Observable, of } from 'rxjs';
import { AlertData, AlertStatus } from './alert.model';


@Injectable({
  providedIn: AlertServiceModule
})
export class AlertService implements SearchListInterface {

  configuration: SearchListConfiguration = {
    defaultSortValue: 'dateDescending', pageSize: 25,
    sortList:
      [{ text: 'Received Date Descending', value: 'dateDescending' },
      { text: 'Received Date Ascending', value: 'dateAscending' }]
  };

  constructor() { }

  getData(search: SearchParameters): Observable<SearchResult> {
    let itemList = Alerts;
    let toReturn = [];

    const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
    const end = start + search.page.pageSize;
    this.sortEntityItem(itemList, search);

    toReturn = itemList.filter(function (item) {
      if (search.filter && search.filter.keyword) {
        return JSON.stringify(item).toUpperCase().includes(search.filter.keyword.toUpperCase())
      }
      else {
        return true;
      }
    }).filter(function (item) {
      if (search.filter && search.filter.status) {
        if (!search.filter.status.active && !search.filter.status.inactive) {
          return true;
        }
        return (search.filter.status.active && item.status === AlertStatus.Active) || (search.filter.status.inactive && item.status === AlertStatus.Inactive);
      }
      else {
        return true;
      }
    })


    return of({
      items: toReturn.slice(start, end),
      totalItems: toReturn.length
    });
  }

  private sortEntityItem(itemList: AlertData[], search: SearchParameters) {
    let valueA = '';
    let valueB = '';
    let lessValueExpress = -1;
    let moreValueExpress = 1;
    itemList.sort((a, b) => {
      switch (search.sortField) {
        case 'dateDescending':
          lessValueExpress = -1;
          moreValueExpress = 1;
          valueA = a.date;
          valueB = b.date;
          break;
        case 'dateAscending':
          lessValueExpress = 1;
          moreValueExpress = -1;
          valueA = a.date;
          valueB = b.date;
          break;
        default:
          break;
      }
      if (valueA < valueB) {
        return lessValueExpress;
      }
      else if (valueA > valueB) {
        return moreValueExpress;
      }
      else {
        return 0;
      }
    });
  }

}
