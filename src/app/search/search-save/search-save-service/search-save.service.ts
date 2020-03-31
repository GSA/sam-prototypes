import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';

import { SearchSaveServiceModule } from './search-save-service.module';


import { searchSaveData } from './search-save.data';

@Injectable({
  providedIn: SearchSaveServiceModule
})
export class SearchSaveService {

  constructor() { }

  getData(search: SearchParameters): Observable<SearchResult> {
    	return of({
            items: searchSaveData._embedded.preferences,
            totalItems: searchSaveData.page.totalElements
        });        	
   }
}
