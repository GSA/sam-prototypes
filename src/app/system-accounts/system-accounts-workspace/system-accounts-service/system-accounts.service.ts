import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import { SystemAccountsServiceModule } from './system-accounts-service.module';
import { systemAccounts } from './system-account.data';

@Injectable({
  providedIn: SystemAccountsServiceModule
})
export class SystemAccountsService {

	public model: SearchListConfiguration = {
	  defaultSortValue: "expirationDateDescending",
	  pageSize: 25,
	  sortList:
	    [
	      { text: "Expiration Date (Nearest)", value: "expirationDateDescending" },
	      { text: "Expiration Date (Farthest)", value: "expirationDateAscending" },
	      { text: "System Account Name (A - Z)", value: "nameAscending" },
	      { text: "System Account Name (Z - A)", value: "nameDescending" }
	    ]
	};

    getData(search: SearchParameters): Observable<SearchResult> {
        return of({
            items: systemAccounts,
            totalItems: systemAccounts.length
        });
    }
}
