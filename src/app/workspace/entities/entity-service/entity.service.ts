import { data } from './entity.data';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';
import { EntityData } from './entity.model';
export class EntityService implements SearchListInterface {
    getData(search: SearchParameters): Observable<SearchResult> {
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        let itemList = data.entityData;
        this.sortEntityItem(itemList, search);
        return of({
            items: itemList.slice(start, end),
            totalItems: itemList.length
        });
    }


    private sortEntityItem(itemList: EntityData[], search: SearchParameters) {
        let valueA = '';
        let valueB = '';
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'expirationDateAscending':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.entityRegistration.expirationDate;
                    valueB = b.entityRegistration.expirationDate;
                    break;
                case 'expirationDateDescending':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.entityRegistration.expirationDate;
                    valueB = b.entityRegistration.expirationDate;
                    break;
                case 'titleA-Z':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.entityRegistration.legalBusinessName;
                    valueB = b.entityRegistration.legalBusinessName;
                    break;
                case 'titleZ-A':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.entityRegistration.legalBusinessName;
                    valueB = b.entityRegistration.legalBusinessName;
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
