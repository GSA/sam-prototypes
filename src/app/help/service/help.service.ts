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

    getById(id: string) {
        for(let i=0; i<this.help.contentDataList.length; i++) {
           if(id == this.help.contentDataList[i].contentId) {
            return this.help.contentDataList[i];
           }
        }
    }

    filterByKeyword(result, keyword) {
        for(let i=0; i<keyword.items.length; i++) {
            if(result.title.toLowerCase().includes(keyword.items[0].value.toLowerCase()) ||
                result.description.toLowerCase().includes(keyword.items[0].value.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    filterByType(result, types) {
        if(types.video && result.type == 3) return true;
        if(types.faq && result.type == 2) return true;
        if(types.term && result.type == 1) return true;
        return false;
    }

    filter(result, filters) {
        if(filters.type) {
          if(!this.filterByType(result, filters.type)) {
            return false;
          }
        }
        if(filters.keyword) {
          if(!this.filterByKeyword(result, filters.keyword)) {
              return false;
          }
        }
        return true;
    }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = this.help.contentDataList;

        if(search.filter) {
            itemList = this.help.contentDataList.filter(element => this.filter(element, search.filter));
        }

        for(let i=0; i<itemList.length; i++) {
            if(i > 0) {
                itemList[i].previousId = itemList[i-1].contentId;
            }
            if(i < itemList.length-1) {
                itemList[i].nextId = itemList[i+1].contentId;
            }
        }

        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        this.sortHelpItem(itemList, search);
        return of({
            items: itemList.slice(start, end),
            totalItems: itemList.length
        });
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
    lastSearchParams: SearchParameters;

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'relevance', pageSize: 25,
	    sortList: 
	    	[{ text: 'Relevance', value: 'relevance' },
	    	 { text: 'Latest Update', value: 'latest' }]
	};

    private help;

    service: FakeWebService;

    constructor() {
        this.service = new FakeWebService();
        this.help = helpItemData;
    }

    getById(id: string): Observable<any> {
        if(this.currentItems) {
            for(let i = 0; i< this.currentItems.length; i++) {
                if(id == this.currentItems[i].contentId) {
                    return of({
                        item: this.currentItems[i],
                        previousId: (i > 0) ? this.currentItems[i-1].contentId : null,
                        nextId: (i < this.currentItems.length-1) ? this.currentItems[i+1].contentId : null
                    });
                }
            };
        } else {
            return of({
                item: this.service.getById(id),
                previousId: null,
                nextId: null
            });
        }
        return of(null);
    }

    filterByType(result, types) {
        if(types.video && result.type == 3) return true;
        if(types.faq && result.type == 2) return true;
        if(types.term && result.type == 1) return true;
        return false;
    }

    getData(search: SearchParameters): Observable<SearchResult> {

        this.lastSearchParams = search;
        let items = this.service.getData(search);
        items.subscribe( result => this.currentItems = result.items);
        return items;
    }


}
