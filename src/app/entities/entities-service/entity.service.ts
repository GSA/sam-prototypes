import { data } from './entity.data';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';

export class EntityService implements SearchListInterface {
    getData(search: SearchParameters): Observable<SearchResult> {
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        //SORT DATA
        return of({
            items: data.entityData.slice(start, end),
            totalItems: data.entityData.length
        });
    }

}