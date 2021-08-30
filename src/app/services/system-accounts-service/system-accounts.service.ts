import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import { Statistic, StatisticsService } from '../interfaces/public-apis';
import { systemAccounts } from './system-account.data';

@Injectable({
  providedIn: 'root'
})
export class SystemAccountsService implements StatisticsService {

	public configuration: SearchListConfiguration = {
	  defaultSortValue: "expirationDateDescending",
	  pageSize: 25,
	  sortList:
	    [
	      { text: "Expiration Date (Nearest)", value: "expirationDateDescending" },
	      { text: "Expiration Date (Farthest)", value: "expirationDateAscending" },
	      { text: "System Account Name (A - Z)", value: "nameAscending" },
	      { text: "System Account Name (Z - A)", value: "nameDescending" }
	    ],
	  defaultFilterValue: {
        dummy: false
    }
	};

  private statistics: Statistic[] = [
		{
			key: 'active',
			label: 'Active',
			color: 'green',
			value: 1
		},
		{
			key: 'draft',
			label: 'Draft',
			color: 'blue',
			value: 1
		},	
		{
			key: 'rejected',
			label: 'Rejected',
			color: 'red',
			value: 0
		},
		{
			key: 'pending',
			label: 'Pending',
			color: 'yellow',
			value: 1
		},
		{
			key: 'expired',
			label: 'Expired',
			color: 'orange',
			value: 1
		}	
    ];

    constructor() { }

    getStatistics(key?: string): Observable<Statistic[]> {
  		return of(this.statistics);
  	}

  	getData(search: SearchParameters): Observable<SearchResult> {
        return of({
            items: systemAccounts,
            totalItems: systemAccounts.length
        });
    }
}