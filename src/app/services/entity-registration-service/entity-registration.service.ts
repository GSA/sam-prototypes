import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic, StatisticsService } from '../interfaces/public-apis';

import { EntityRegistrationServiceModule } from './entity-registration-service.module';
import { registrationData } from './registration.data';

@Injectable({
  providedIn: EntityRegistrationServiceModule
})
export class EntityRegistrationService implements StatisticsService {

  private statistics: Statistic[] = [
    {
      key: 'active',
      label: 'Active',
      color: 'green',
      value: 10
    },
    {
      key: 'draft',
      label: 'Draft',
      color: 'grey',
      value: 1
    },
    {
      key: 'wip',
      label: 'Work In Progress',
      color: 'blue',
      value: 2
    },
    {
      key: 'submitted',
      label: 'Submitted',
      color: 'yellow',
      value: 6
    },
    {
      key: 'expired',
      label: 'Expired',
      color: 'red',
      value: 2
    }
  ];

  data: any[];

  constructor() {
  	this.initData(registrationData._embedded.results);
  }

  getStatistics(key?: string): Observable<Statistic[]> {
    return of(this.statistics);
  }

  public getRecord(uei): any {
     for(let i=0; i<this.data.length; i++) {
       if(this.data[i].dunsNumber == uei) {
           return this.data[i];
       }
     }
     return null;
  }

  private initData(data: any[]) {
  	this.data = data;
  }

}

