import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { AbstractSearchableServiceModule } from './abstract-searchable-service.module';

@Injectable({
  providedIn: AbstractSearchableServiceModule
})
export abstract class AbstractSearchableService {

  constructor() { }

  abstract getSortedFilteredData(search: SearchParameters): any[];

  getData(search: SearchParameters): Observable<SearchResult> {
  	  let data = this.getSortedFilteredData(search);
  	  if(data) {
        return of({
           items: this.getPage(data, search.page.pageNumber-1, search.page.pageSize),
           totalItems: data.length
        });
  	  } else {
        return of({
            items: [],
            totalItems: 0
        });
  	  }
  }


  private getPage(data: any[], page: number, pageSize: number): any[] {
    let startIndex: number = page * pageSize;
    let endIndex = startIndex + (pageSize);
    if(endIndex > (data.length)) {
    	endIndex = data.length;
    }
    return data.slice(startIndex, endIndex)
  }

}