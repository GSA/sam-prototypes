import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic, StatisticsService } from '../interfaces/public-apis';

import { ContractOpportunitiesServiceModule } from './contract-opportunities-service.module';

@Injectable({
  providedIn: ContractOpportunitiesServiceModule
})
export class ContractOpportunitiesService implements StatisticsService {

	private statistics: Statistic[] = [
		{
			key: 'active',
			label: 'Active',
			color: 'green',
			value: 15
		},
		{
			key: 'draft',
			label: 'Draft',
			color: 'blue',
			value: 2
		}
	];

  constructor() { }

  getStatistics(key?: string): Observable<Statistic[]> {
  	return of(this.statistics);
  }
}
