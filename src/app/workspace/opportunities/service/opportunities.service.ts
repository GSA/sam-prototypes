import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {

   constructor() { }

   getData(search: SearchParameters): Observable<SearchResult> {
        return of({
            items: [],
            totalItems: 0
        });
    }
}
