import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';

import { SearchServiceModule } from './search-service.module';
import { assistanceData, opportunitiesData, registrationData, exclusionData, dbaData, scaData } from './opportunities.data';


@Injectable({
  providedIn: SearchServiceModule
})
export class SearchService {

    public domain: string;


    getData(search: SearchParameters): Observable<SearchResult> {

        switch(this.domain) {
        	case 'assistancelist': {
		    	return of({
		            items: assistanceData._embedded.results,
		            totalItems: assistanceData.page.totalElements
		        });        	
        	}
        	case 'opportunities': {
                let data = opportunitiesData._embedded.results;
                this.sortItems(data, search);
		    	return of({
		            items: data,
		            totalItems: opportunitiesData.page.totalElements
		        });        	
        	}
        	case 'registrations': {
		    	return of({
		            items: registrationData._embedded.results,
		            totalItems: registrationData.page.totalElements
		        }); 
        	}
        	case 'disasterresponse': {
		    	return of({
		            items: registrationData._embedded.results,
		            totalItems: registrationData.page.totalElements
		        }); 
        	}
        	case 'exclusions': {
		    	return of({
		            items: exclusionData._embedded.results,
		            totalItems: exclusionData.page.totalElements
		        }); 

        	}
        	case 'entityinfo' : {
        		return of({
        			items: this.mixEntityInformation(),
        			totalItems: registrationData.page.totalElements + exclusionData.page.totalElements
        		});
        	}
        	case 'dba': {
		    	return of({
		            items: dbaData._embedded.results,
		            totalItems: dbaData.page.totalElements
		        }); 
        	}
        	case 'sca': {
		    	return of({
		            items: scaData._embedded.results,
		            totalItems: scaData.page.totalElements
		        }); 
        	}
        	default: {
	 	    	return of({
		    		items: [],
		    		totalItems: 0
		    	})       	
        	}
        }
    }

    private sortItems(itemList: any[], search: SearchParameters) {
        let values = [];
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            switch (this.domain) {
                case 'opportunities':
                    values = this.getOpportunityValues(search.sortField, a, b);
                    break;
                default:
                    break;
            }
            if(values) {
              if(values[0] < values[1]) {
                return -1;
              } else if (values[0] > values[1]) {
                return 1;
              }
            }
            return 0;
        });
    }

    private getOpportunityValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.responseDate), new Date(b.responseDate)];
            case 'nameAscending':
                return [a.title, b.title];
            case 'nameDescending':
                return [b.title, a.title];
            default:
                return [a.title, b.title];
         }
    }

    mixEntityInformation() {
      let result: any[] = [];
      for(let i = 0; i < exclusionData._embedded.results.length && i < registrationData._embedded.results.length; i++) {
           result.push(exclusionData._embedded.results[i]);
           result.push(registrationData._embedded.results[i]);
      }
      return result;
    }
}