import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { RequestServiceModule } from './service.module';
import { RequestData } from './request.model';
import { Requests } from './request.data';

@Injectable({
  providedIn: RequestServiceModule
})
export class RequestService implements SearchListInterface {

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'dateDescending', pageSize: 25,
	    sortList: 
	    	[{ text: 'Received Date Descending', value: 'dateDescending' },
	    	 { text: 'Received Date Ascending', value: 'dateAscending' }]
	};

    constructor() {

    }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = Requests;
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

    private sortEntityItem(itemList: RequestData[], search: SearchParameters) {
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
