import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import { Statistic, StatisticsService } from '../interfaces/public-apis';

import { EntityRegistrationServiceModule } from './entity-registration-service.module';
import { registrationData } from './registration.data';

@Injectable({
  providedIn: EntityRegistrationServiceModule
})
export class EntityRegistrationService implements StatisticsService, SearchListInterface {

  configuration: SearchListConfiguration = {
      defaultSortValue: 'expirationAscending', pageSize: 25,
      sortList: [{ text: 'Expiration Date: Closest', value: 'expirationAscending' }],
      defaultFilterValue: {
        dummy: false
      }
  };

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

    getData(search: SearchParameters): Observable<SearchResult> {
       let registrationItems = this.data;

       return of({
         items: this.pagingFunction(registrationItems, search.page.pageNumber-1, search.page.pageSize),
         totalItems: registrationItems.length
       });
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

  pagingFunction(data: any[], page: number, pageSize: number): any[] {
      let startIndex: number = page * pageSize;
      let endIndex = startIndex + (pageSize);
      if(endIndex > (data.length)) {
          endIndex = data.length;
      }
      return data.slice(startIndex, endIndex)
  }

}

