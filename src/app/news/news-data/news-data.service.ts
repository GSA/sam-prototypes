import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { NewsDataModule } from './news-data.module';
import { NewsData } from './news.model';
import { NewsList } from './news.data';

@Injectable({
  providedIn: NewsDataModule
})
export class NewsDataService {

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'publishDateDescending', pageSize: 25,
	    sortList: 
	    	[{ text: 'Publish Date Ascending', value: 'publishDateAscending' },
	    	 { text: 'Publish Date Descending', value: 'publishDateDescending' }]
	};

	news: NewsData[] = NewsList;

  constructor() { }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = this.news;
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

    private sortEntityItem(itemList: NewsData[], search: SearchParameters) {
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
