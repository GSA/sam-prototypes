import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import { FeedItem, Domain, domainMap, itemTypeMap } from '../interfaces/public-apis';

export abstract class BaseFeedService implements SearchListInterface {

	configuration: SearchListConfiguration = {
    	defaultSortValue: 'dateDescending', pageSize: 25,
    	sortList: 
    		[{ text: 'Received Date: Newest', value: 'dateDescending' },
    	 	{ text: 'Received Date: Oldest', value: 'dateAscending' }],
    	defaultFilterValue: {
    		dummy: false
    	}
  	};

    abstract getFeedItems(): FeedItem[];

    getData(search: SearchParameters): Observable<SearchResult> {
       let feedItems = this.getFeedItems();

       if(search.filter && search.filter.domain) {
           feedItems = this.filterFunction(search.filter.domain, feedItems);
       }

       feedItems.sort((a, b) => this.sortFunction(search.sortField == 'dateDescending', a, b));

       return of({
       	 items: this.pagingFunction(feedItems, search.page.pageNumber-1, search.page.pageSize),
       	 totalItems: feedItems.length
       });
    }

    getDomains(): Observable<any[]> {
       let domains:any[] = [];
       let feedItems = this.getFeedItems();
       for(let i=0; i<feedItems.length; i++) {
           for(let j = 0; j<feedItems[i].domains.length; j++) {
                let compareItem = feedItems[i].domains[j];
           		if(!(domains.some(result => result.value == compareItem))) {
               		domains.push({
                   		value: compareItem,
                   		label: domainMap.get(compareItem)
               		});
           		}
           }
       }
       return of(domains);
    }

    getItemTypes(): Observable<any[]> {
        let itemTypes:any[] = [];
       let feedItems = this.getFeedItems();
       for(let i=0; i<feedItems.length; i++) {
          let compareItem = feedItems[i].itemType;
          if(!(itemTypes.some(result => result.value == compareItem))) {
                itemTypes.push({
                    value: compareItem,
                    label: itemTypeMap.get(compareItem)
                });
          }
       }
       return of(itemTypes);       
    }

    filterFunction(domain: any, data: FeedItem[]): FeedItem[] {
      let selectedDomains: Domain[] = [];
      let keys = Object.keys(domain);
      for(let i=0; i<keys.length; i++) {
 		if(domain[keys[i]]) {
 		    selectedDomains.push(parseInt(keys[i]));
 		}
      }

      if(selectedDomains.length == 0) {
        return data;
      }

      return data.filter((item) => this.hasItem(selectedDomains, item.domains));
    }

	hasItem(selectedDomains: Domain[], itemDomains: Domain[]): boolean {
      for(let i=0; i<itemDomains.length; i++) {
        for(let j=0; j<selectedDomains.length; j++) {
            if(itemDomains[i] == selectedDomains[j]) {
                return true;
            }
        }
      }
	  return false;
	}

    sortFunction(descending: boolean, a: FeedItem, b: FeedItem) {
        let dateA = new Date(a.date).getTime();
        let dateB = new Date(b.date).getTime();
        return (descending) ? dateB - dateA : dateA - dateB;
    }

    pagingFunction(data: any[], page: number, pageSize: number): any[] {
        let startIndex: number = page * pageSize;
        let endIndex = startIndex + (pageSize);
        if(endIndex > (data.length)) {
            endIndex = data.length;
        }
        return data.slice(startIndex, endIndex)
    }
}
