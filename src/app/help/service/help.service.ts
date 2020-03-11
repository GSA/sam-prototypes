import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { HelpData, HelpType } from './help.model';
import { HelpList } from './help.data';

import { helpItemData } from './help-items.data';

class FakeWebService {
    help: any;

    constructor() {
        this.help = helpItemData;
    }

    getData(search: SearchParameters): SearchResult {
        let itemList = this.help.contentDataList;

        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        this.sortHelpItem(itemList, search);
        return {
            items: itemList.slice(start, end),
            totalItems: this.help.contentDataList.length
        };
    }

    private sortHelpItem(itemList: any, search: SearchParameters) {
        let valueA = null;
        let valueB = null;
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'relevance':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.title;
                    valueB = b.title;
                    break;
                case 'latest':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = new Date(a.lastModifiedDate);
                    valueB = new Date(b.lastModifiedDate);
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

@Injectable({
  providedIn: 'root'
})
export class HelpService {

    currentItems: any[];

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'relevance', pageSize: 25,
	    sortList: 
	    	[{ text: 'Relevance', value: 'relevance' },
	    	 { text: 'Latest Update', value: 'latest' }]
	};

    service: FakeWebService;

    constructor() {
        this.service = new FakeWebService;
    }

    getById(id: string): Observable<any> {
        let result: any = null;
        this.currentItems.forEach((data, index) => {
            if(id == data.contentId) {
                result = {
                    "item": data,
                    "previousId": (index > 0) ? this.currentItems[index-1] : null,
                    "nextId": (index < this.currentItems.length-1) ? this.currentItems[index+1] : null
                };
            }
        });
        return of(result);
    }

    getData(search: SearchParameters): Observable<SearchResult> {
        let result: SearchResult = this.service.getData(search);
        this.currentItems = result.items;
        return of(result);
    }

}
