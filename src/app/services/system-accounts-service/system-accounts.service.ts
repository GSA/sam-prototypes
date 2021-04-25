import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic, StatisticsService } from '../interfaces/public-apis';

import { SystemAccountsServiceModule } from './system-accounts-service.module';

@Injectable({
  providedIn: SystemAccountsServiceModule
})
export class SystemAccountsService implements StatisticsService {

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
}