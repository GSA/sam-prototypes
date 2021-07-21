import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic, StatisticsService } from '../interfaces/public-apis';

import { AssistanceServiceModule } from './assistance-service.module';

@Injectable({
  providedIn: AssistanceServiceModule
})
export class AssistanceService implements StatisticsService {

    private statistics: Statistic[] = [
		{
			key: 'published',
			label: 'Published',
			color: 'green',
			value: 110
		},
		{
			key: 'draft',
			label: 'Draft',
			color: 'blue',
			value: 12
		},	
		{
			key: 'rejected',
			label: 'Rejected',
			color: 'red',
			value: 1
		},
		{
			key: 'overdue',
			label: 'Overdue',
			color: 'orange',
			value: 23
		}	
    ];

  constructor() { }

  getStatistics(key?: string): Observable<Statistic[]> {
  	return of(this.statistics);
  }
}
