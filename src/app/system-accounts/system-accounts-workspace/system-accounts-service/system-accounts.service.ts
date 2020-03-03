import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { SystemAccountsServiceModule } from './system-accounts-service.module';
import { systemAccounts } from './system-account.data';

@Injectable({
  providedIn: SystemAccountsServiceModule
})
export class SystemAccountsService {

  constructor() { }

    getData(search: SearchParameters): Observable<SearchResult> {
        return of({
            items: systemAccounts,
            totalItems: systemAccounts.length
        });
    }
}
