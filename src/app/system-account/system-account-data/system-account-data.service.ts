import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { SystemAccountDataModule } from './system-account-data.module';
import { SystemAccountData } from './system-account.model';
import { SystemAccountList } from './system-account.data';

@Injectable({
  providedIn: SystemAccountDataModule
})
export class SystemAccountDataService {

	configuration: SearchListConfiguration = {
	    defaultSortValue: 'accountNameAscending', 
	    pageSize: 25,
	    sortList: 
	    	[{ text: 'Account Name Ascending', value: 'accountNameAscending' },
	    	 { text: 'Account Name Descending', value: 'accountNameDescending' }]
	};

	systemAccounts: SystemAccountData[] = SystemAccountList;
	currentAccount: SystemAccountData;

  constructor() { 
  }

    getAccount(id: string) {
        for (let i = 0; i < this.systemAccounts.length; i++) {
          if(id == this.systemAccounts[i].id) {
              return this.systemAccounts[i];
          }
        }
        return null;
    }

    setCurrentAccount(account: SystemAccountData) {
        this.currentAccount = account;
    }

    getCurrentAccount() {
        return this.currentAccount;
    }

    getData(search: SearchParameters): Observable<SearchResult> {
        let itemList = this.systemAccounts;
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

    private sortEntityItem(itemList: SystemAccountData[], search: SearchParameters) {
        let valueA = '';
        let valueB = '';
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'accountNameAscending':
                    lessValueExpress = -1;
                    moreValueExpress = 1;
                    valueA = a.info.accountName;
                    valueB = b.info.accountName;
                    break;
                case 'accountNameDescending':
                    lessValueExpress = 1;
                    moreValueExpress = -1;
                    valueA = a.info.accountName;
                    valueB = b.info.accountName;
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
