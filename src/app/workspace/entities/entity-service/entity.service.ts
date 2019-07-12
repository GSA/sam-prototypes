import { data } from './entity.data';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';
import { EntityData } from './entity.model';
export class EntityService implements SearchListInterface {
    // getData(search: SearchParameters): Observable<SearchResult> {
    //     let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
    //     let end = start + search.page.pageSize;
    //     let itemList = data.entityData;
    //     this.sortEntityItem(itemList, search);
    //     return of({
    //         items: itemList.slice(start, end),
    //         totalItems: itemList.length
    //     });
    // }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = data.entityData;
        if (search.filter) {
            let toReturn = [];
            // toReturn = this.getFilterDataByKeyword(search.filter.searchKeyword.keyword);
            toReturn = this.getFilterDataByEntity(search.filter.searchEntity);
            // for (let i= 0; i < itemList.length; i++) {
            //     const item = itemList[i];
            //     if (item.entityRegistration.legalBusinessName.toLowerCase()
            //     .indexOf(search.filter.searchKeyword.keyword.toLowerCase()) !== -1) {
            //         toReturn.push(item);
            //     }
            // }
            itemList = toReturn;
        }
        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        this.sortEntityItem(itemList, search);
        return of({
            items: itemList.slice(start, end),
            totalItems: itemList.length
        });
    }


    public getFilterDataByEntity(filterParameters) {
        Object.keys(filterParameters).forEach(key => filterParameters[key] === undefined ? delete filterParameters[key] : '');
        console.log(filterParameters);
        let filterList = [];
        const itemList = data.entityData;
        filterList = itemList.filter((entity) => {
            return Object.keys(filterParameters).every((item) => {
                if (Array.isArray(filterParameters[item])) {
                    return filterParameters[item].indexOf(entity.entityRegistration[item]) > -1;
                } else {
                    return entity.entityRegistration[item].includes(filterParameters[item]);
                }
            });
        });
        console.log(filterList);
        return filterList;
    }

    public getFilterDataByKeyword(keyword: string): any {
        let filterList = [];
        const itemList = data.entityData;
        filterList = itemList.filter((entity) => {
            return entity.entityRegistration.legalBusinessName.toLowerCase().includes(keyword.toLowerCase());
        });
        console.log(filterList);
        return filterList;
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
