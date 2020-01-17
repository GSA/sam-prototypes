import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { HelpServiceModule } from './service.module';
import { HelpData, HelpType } from './help.model';
import { HelpList } from './help.data';

@Injectable({
  providedIn: HelpServiceModule
})
export class HelpService {

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'titleAscending', pageSize: 25,
	    sortList: 
	    	[{ text: 'Title Ascending', value: 'titleAscending' },
	    	 { text: 'Title Descending', value: 'titleDescending' }]
	};

    help: HelpData[] = [];

    constructor() {
    	this.help = HelpList;
    }

    getById(id: string): HelpData {
        for(let data of this.help) {
            if(id == data.id) {
              return data;
            }
        }
    }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = this.help;
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

    private sortEntityItem(itemList: HelpData[], search: SearchParameters) {
        let valueA = '';
        let valueB = '';
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'titleAscending':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.title;
                    valueB = b.title;
                    break;
                case 'titleDescending':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.title;
                    valueB = b.title;
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