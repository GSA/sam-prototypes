import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { AlertDataModule } from './alert-data.module';
import { AlertData } from './alert.model';
import { AlertList } from './alert.data';

@Injectable({
  providedIn: AlertDataModule
})
export class AlertDataService {

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'publishDateDescending', pageSize: 25,
	    sortList: 
	    	[{ text: 'Publish Date Ascending', value: 'publishDateAscending' },
	    	 { text: 'Publish Date Descending', value: 'publishDateDescending' },
	    	 { text: 'Expiration Date Ascending', value: 'expiresDateAscending' },
	    	 { text: 'Expiration Date Descending', value: 'expiresDateDescending' }]
	};

	alerts: AlertData[] = AlertList;

  constructor() { }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = this.alerts;
        const searchProperty = 'title';
        let toReturn = [];

        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        this.sortEntityItem(itemList, search);
        return of({
            items: itemList.slice(start, end),
            totalItems: itemList.length
        });
    }

    private sortEntityItem(itemList: AlertData[], search: SearchParameters) {
        let valueA = '';
        let valueB = '';
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'publishDateAscending':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.publishDate;
                    valueB = b.publishDate;
                    break;
                case 'publishDateDescending':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.publishDate;
                    valueB = b.publishDate;
                    break;
                case 'expiresDateAscending':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.expiresDate;
                    valueB = b.expiresDate;
                    break;
                case 'expiresDateDescending':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.expiresDate;
                    valueB = b.expiresDate;
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

