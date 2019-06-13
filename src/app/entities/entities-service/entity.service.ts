import { data } from './entity.data';
import { Observable, of } from 'rxjs';

export class EntityService {
    getData(search): Observable<any> {
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        //SORT DATA
        return of({
            items: data.entityData.slice(start, end),
            totalItems: data.entityData.length
        });
    }

}