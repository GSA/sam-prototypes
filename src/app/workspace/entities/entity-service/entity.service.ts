import { data } from './entity.data';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';
import { EntityData } from './entity.model';
export class EntityService implements SearchListInterface {
    filterParam = {};
    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = data.entityData;
        const searchProperty = 'legalBusinessName';
        let toReturn = [];
        if (search.filter) {
            for (const i in search.filter) {
                if (Object.keys(search.filter[i]).length > 0) {
                    if (i === 'searchKeyword') {
                        this.filterParam[searchProperty] = search.filter.searchKeyword.keyword;
                    } else if (i === 'registration') {
                        const selectedStatus = [];
                        for (const j in search.filter[i].registrationStatus) {
                            if (search.filter[i].registrationStatus[j]) {
                                selectedStatus.push(j);
                            }
                        }
                        if (selectedStatus.length === 0) {
                            delete this.filterParam['registrationStatus'];
                        } else {
                            this.filterParam = Object.assign(this.filterParam, { registrationStatus: selectedStatus });
                        }
                    } else {
                        this.filterParam = Object.assign(this.filterParam, ...search.filter[i]);
                    }
                }
            }

            toReturn = this.getFilterDataByEntity(this.filterParam);
            if (toReturn.length === 0) {
                window.scroll(0, 0);
            }
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
        let itemList = data.entityData;
        itemList = itemList.filter((entity) => {
            return Object.keys(filterParameters).every((item) => {
                if (item === 'expirationDate' && filterParameters[item] !== "0") {
                    const oneDay = 24 * 60 * 60 * 1000;
                    const now = new Date();
                    const expiringDate = new Date(entity.entityRegistration[item]);
                    return expiringDate > now &&
                        (Math.round(Math.abs((expiringDate.getTime() - now.getTime()) / oneDay)) < filterParameters[item]);
                } else if (item === 'registrationStatus') {
                    return (filterParameters[item].indexOf(entity.entityRegistration[item])) > -1;
                } else if (item === 'ueiDUNS') {

                    const ueiDUNSList = [];
                    if (filterParameters[item].items.length >= 1) {
                        filterParameters[item].items.forEach(element => {
                            console.log(element[item]);
                            ueiDUNSList.push(element[item]);
                        });
                        return (ueiDUNSList.indexOf(entity.entityRegistration[item])) > -1;
                    } else {
                        return itemList;
                    }

                } else {
                    return entity.entityRegistration[item].toLowerCase().includes(filterParameters[item].toLowerCase());
                }
            });
        });
        return itemList;
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
