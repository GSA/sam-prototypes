import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchListInterface, SearchResult } from '@gsa-sam/layouts';
import { assistanceData } from './assistance.data';

@Injectable({
  providedIn: 'root'
})
export class AssistancelistService {

  private data = assistanceData;

  constructor() { }

  private getPage(data: any[], page: number, pageSize: number): any[] {
      let startIndex: number = page * pageSize;
      let endIndex = startIndex + (pageSize);
      if(endIndex > (data.length)) {
          endIndex = data.length;
      }
      return data.slice(startIndex, endIndex)
  }

   getData(search: SearchParameters): Observable<SearchResult> {

        if(this.data) {
            this.sortItems(this.data, search);
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

    private sortItems(itemList: any, search: SearchParameters) {
        let valueA = null;
        let valueB = null;
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (search.sortField) {
                case 'cfdaAscending':
                    valueA = +a.programNumber;
                    valueB = +b.programNumber;
                    break;
                case 'cfdaDescending':
                    valueA = +b.programNumber;
                    valueB = +a.programNumber;
                    break;
                case 'titleA-Z':
                    valueA = a.title;
                    valueB = b.title;
                    break;
                case 'titleZ-A':
                    valueA = b.title;
                    valueB = a.title;
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
