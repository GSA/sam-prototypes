import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { SearchServiceModule } from './search-service.module';

import { registrationData } from '../entity-registration-service/registration.data';
import { assistanceData } from '../assistance-service/assistance.data';
import { dbaData, scaData } from '../wage-service/wages.data';
import { exclusionData } from '../exclusions-service/exclusions.data';
import { opportunitiesData } from '../contract-opportunities-service/opportunities.data';
import { contractData } from '../contract-data-service/contract-data.data';
import { integrityData } from '../integrity-service/integrity.data';
import { hierarchyData } from '../hierarchy-service/hierarchy.data';
import { extractKeywords } from 'src/app/search/search-filters/common/keywordfilter';


@Injectable({
	providedIn: SearchServiceModule
})
export class SearchService {

    public domain: string;
    private data: any[];

    constructor() {
        this.setType(opportunitiesData, "opportunity");
        this.setType(integrityData, "integrity");
    }

    private getPage(data: any[], page: number, pageSize: number): any[] {
        let startIndex: number = page * pageSize;
        let endIndex = startIndex + (pageSize);
        if(endIndex > (data.length)) {
            endIndex = data.length;
        }
        return data.slice(startIndex, endIndex)
    }

    public getDomain(): string {
        return this.domain;
    }

    public setDomain(domain: string) {
        this.domain = domain;
        switch(this.domain) {
            case 'assistancelist': {
                this.data = assistanceData._embedded.results;  
                break;      
            }
            case 'opportunities': {
                this.data = opportunitiesData;  
                break;     
            }
            case 'registrations': {
                this.data = registrationData._embedded.results;
                break;
            }
            case 'disasterresponse': {
                this.data = registrationData._embedded.results.filter(
                    entry => entry.name.toLowerCase().indexOf('disaster') !== -1 ||
                             entry.name.toLowerCase().indexOf('construct') !== -1);
                break;
            }
            case 'exclusions': {
                this.data = exclusionData._embedded.results;
                break; 

            }
            case 'entityinfo' : {
                this.data = this.mixEntityInformation();
                break;
            }
            case 'dba': {
                this.data = dbaData._embedded.results;
                break;
            }
            case 'sca': {
                this.data = scaData._embedded.results;
                break;
            }
            case 'contractdata': {
                this.data = contractData._embedded.results;
                break;
            }
            case 'integrity': {
                this.data = integrityData;
                break;
            }
            default: {
                this.data = this.getAllData();
                break;       
            }
        }
        this.setRelevance(this.data);
    }

    private getAllData() {
        return assistanceData._embedded.results.concat(opportunitiesData).concat(registrationData._embedded.results).concat(exclusionData._embedded.results).concat(integrityData);
    }

    private filterKeywords(records: any[], searchType: string, keywords: string[]): any[] {

        let filteredData = [];
        switch(searchType) { 
               case 'exactMatch': { 
                    filteredData = this.data.filter(data => this.includesAll(data, keywords));              
                    break; 
               };
               case 'anyWords': { 
                    keywords.forEach(word => {
                        const results = this.data.filter(
                            data => JSON.stringify(data).toUpperCase().includes(word.toUpperCase())
                        );
                        results.forEach(result => {
                            const existsInFilteredData = filteredData.find(data => data === result);
                            if (!existsInFilteredData) {
                                filteredData.push(result);
                            }
                        });
                    });
                    break; 
               } 
               default: { 
                  filteredData = this.data.filter(data => this.includesAll(data, keywords));
                  break; 
               } 
        } 
        return filteredData;
    }

    includesAll(record: any, keywords: string[]): boolean {
        let data = JSON.stringify(record);
        let result = true;
        keywords.forEach(word => {
            if(!(data.toUpperCase().includes(word.toUpperCase()))) {
                result = false;
            }
        })
        return result;
    }

    getData(search: SearchParameters): Observable<SearchResult> {
        if(this.data) {
            this.filterData(search);

            // only do keyword search for demo purpose
            let filteredData = [];
            if (search.filter && search.filter.keyword) {
                let keywords = extractKeywords(search.filter.keyword);

                if (!keywords) {
                    filteredData = this.data;
                } else {
                    filteredData = this.filterKeywords(this.data, search.filter.keyword.keywordRadio, keywords);
                }

            }

            this.sortItems(filteredData, search);
            return of({
                items: this.getPage(filteredData, search.page.pageNumber-1, search.page.pageSize),
                totalItems: filteredData.length
            }); 
        } else {
            return of({
                items: [],
                totalItems: 0
            });
        }
    }

    private filterOpportunity(item: any, search: SearchParameters) {
         let naics = search.filter.serviceClassificationsWrapper.naicsCode;

    }

    private filterIntegrityData(search: SearchParameters) {
        if(search.filter && search.filter.entity && search.filter.entity.ueiDuns) {
            this.data = integrityData.filter(entry => entry.DUNS.toString().indexOf(search.filter.entity.ueiDuns) !== -1);
    	}
    }

    private filterData(search: SearchParameters) {
            switch(this.domain) {
            case 'assistancelist': {
                break;      
            }
            case 'opportunities': {
                break;     
            }
            case 'registrations': {
                break;
            }
            case 'disasterresponse': {
                break;
            }
            case 'exclusions': {
                break; 

            }
            case 'entityinfo' : {
                break;
            }
            case 'dba': {
                break;
            }
            case 'sca': {
                break;
            }
            case 'contractdata': {
                break;
            }
            case 'integrity': {
                this.filterIntegrityData(search);
                break;
            }
            default: {
                break;       
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
                case 'assistancelist':
                    values = this.getAssistanceValues(search.sortField, a, b);
                    break;
                case 'entityinfo':
                    values = this.getEntityInfoValues(search.sortField, a, b);
                    break;
                case 'registrations':
                    values = this.getRegistrationValues(search.sortField, a, b);
                    break;
                case 'disasterresponse':
                    values = this.getRegistrationValues(search.sortField, a, b);
                    break;
                default:
                    values = this.getAllValues(search.sortField, a, b);
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

    private getAllValues(field: string, a: any, b: any) {
        return [a._rScore, b._rScore];
    }

    private getEntityInfoValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'nameAscending':
                return [(a.title) ? a.title : "", (b.title) ? b.title : ""];
            case 'nameDescending':
                return [(b.title) ? b.title : "", (a.title) ? a.title : ""];
            default: 
                return [a._rScore, b._rScore];
        }
    }

    private getRegistrationValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.registrationExpirationDate), new Date(b.registrationExpirationDate)];
            case 'dateAscending':
                return [new Date(b.registrationExpirationDate), new Date(a.registrationExpirationDate)];
            case 'nameAscending':
                return [a.name, b.name];
            case 'nameDescending':
                return [b.name, a.name];
            case 'ueiAscending':
                return [a.dunsNumber, b.dunsNumber];
            case 'ueiDescending':
                return [b.dunsNumber, a.dunsNumber];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private getOpportunityValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.response_date), new Date(b.response_date)];
            case 'dateAscending':
                return [new Date(b.response_date), new Date(a.response_date)];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private getAssistanceValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.publishDate), new Date(b.publishDate)];
            case 'titleAscending':
                return [a.title, b.title];
            case 'titleDescending':
                return [b.title, a.title];
            case 'cfdaNumberAscending':
                return [+a.programNumber, +b.programNumber];
            case 'cfdaNumberDescending':
                return [+b.programNumber, +a.programNumber];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private setRelevance(data) {
        for(let i = 0; i < data.length; i++) {
            data[i]._rScore = Math.random();
        }
    }

    private setType(data: any, type: string) {
        for(let i=0; i<data.length; i++) {
            data[i]._type = type;
            data[i].id = i;
        }
    }

    mixEntityInformation() {
      let result: any[] = [];
      for(let i = 0; i < exclusionData._embedded.results.length; i++) {
           result.push(exclusionData._embedded.results[i]);
      }
      for(let j = 0; j < registrationData._embedded.results.length; j++) {
           result.push(registrationData._embedded.results[j]);
      }
      return result;
    }
}