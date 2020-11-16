import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { DatabankServiceModule } from './databank-service.module';

import { databankData } from './databank.data';

@Injectable({
  providedIn: DatabankServiceModule
})
export class DatabankService {

  private data: any[];

  constructor() { 
  	this.data = databankData;
  }

  private getPage(data: any[], page: number, pageSize: number): any[] {
    let startIndex: number = page * pageSize;
    let endIndex = startIndex + (pageSize);
    if(endIndex > (data.length)) {
        endIndex = data.length;
    }
    return data.slice(startIndex, endIndex)
  }

  getReport(reportId: string): any {
  	if(this.data) {
  	   return this.data.find(report => report.reportId == reportId);
  	}
  	return null;
  }

  getData(search: SearchParameters): Observable<SearchResult> {

        if(this.data) {
            return of({
                items: this.getPage(this.data, search.page.pageNumber-1, search.page.pageSize),
                totalItems: this.data.length
            }); 
        } else {
            return of({
                items: [],
                totalItems: 0
            });
        }
    }
}
