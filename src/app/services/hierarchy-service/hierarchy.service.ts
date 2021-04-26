import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import { HierarchyServiceModule } from './hierarchy-service.module';
import { hierarchyData } from './hierarchy.data';
import { Statistic, StatisticsGroup, StatisticsService } from '../interfaces/public-apis';

@Injectable({
  providedIn: HierarchyServiceModule
})
export class HierarchyService implements StatisticsService {

    private statistics: StatisticsGroup[] = [
      {
      	key: 'last90days',
      	label: 'Events in the last 90 days',
      	color: 'na',
      	value: -1,
      	statistics: [
			{
				key: 'started',
				label: 'Started',
				color: 'green',
				value: 4
			},
			{
				key: 'Expiring',
				label: 'Expiring',
				color: 'red',
				value: 6
			}	
		]
	  },
	  {
      	key: 'next90days',
      	label: 'Events in the next 90 days',
      	color: 'na',
      	value: -1,
      	statistics: [
			{
				key: 'started',
				label: 'Started',
				color: 'green',
				value: 3
			},
			{
				key: 'Expiring',
				label: 'Expiring',
				color: 'red',
				value: 2
			}	
		]
	  }
    ];

  	data: any[] = hierarchyData;

  	constructor() { 
        this.initData();
  	}
  	
  	getStatistics(key?: string): Observable<Statistic[]> {
  	    return of(this.statistics);
    }

  	getParentKey(org: any): string {
  		let path = org.fullParentPath.split(".");
  		return (path.length >= 2) ? path[path.length - 2] : "";
  	}

  	initData() {
	    for(let i=0; i<hierarchyData.length; i++) {
	    	let next:any = hierarchyData[i];
	    	next.fpdsCode = next.org.fpdsCode;
	    	next.name = next.org.name;
	    	next.displayLabel = next.org.fpdsCode + ' - ' + next.org.name;
	    	next.levelLabel = next.org.type;
	    	next.key = next.org.orgKey.toString();
	    	next.parentKey = this.getParentKey(next.org);
	    	let path: string[] = next.org.fullParentPathName.split(".");
	    	next.parentName = (path.length > 1) ? path[path.length - 2] : "DEPARTMENT";
	    }
		return hierarchyData.sort((a, b) => { 
            if(a.org.level != b.org.level) {
            	return a.org.level - b.org.level;
            } else if( a.org.name > b.org.name) {
            	return 1;
            } else {
            	return -1;
            }
		});
	}

	match(item, searchValue) {
	    if(item.org.modStatus != "ACTIVE") {
	       return false;
	    }
	    if(item.org.aacCode && item.org.aacCode.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(item.org.cgac && item.org.cgac.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(item.org.fpdsCode && item.org.fpdsCode.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(item.org.shortName && item.org.shortName.toLowerCase().startsWith(searchValue.toLowerCase())) {
	      return true;
	    }
	    if(item.org.name && item.org.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
	      return true;
	    }
	    return false;
	}

    getMatch(key: string, includeChildren: boolean, currentItems: number, searchValue: string): Observable<SDSHiercarchicalServiceResult> {
        let result;
        if(key && includeChildren && key) {
            if(key == 'Root') {
                result = this.data.filter(element => element.parentKey == "" && this.match(element, searchValue));
            } else {
            	result = this.data.filter(element => element.parentKey == key && this.match(element, searchValue));
            }
        } else {
        	result = this.data.filter(element => this.match(element, searchValue));
        }
        return of({
        	items: result.slice(0 + currentItems, ((30 + currentItems) < result.length) ? 30 + currentItems : result.length),
        	totalItems: result.length
        });      

    }

	getHierarchyNode(key: string): any {
		return this.data.find(element => element.key == key);
	}

    getHierarchyNodePath(key: string): any[] {
		let node = this.data.find(element => element.key == key);
		let result = [node];
		while(node.parentKey && node.parentKey != "") {
		    let id = node.parentKey;
		    node = this.data.find(element => element.key == id);
		    if(node) {
		    	result.unshift(node);
		    }
		}
		return result;
	}

	getChildData(parentKey: string) : any[] {
		return this.data.filter(element => element.parentKey == parentKey);
	}

	getAllDataForLevel(level: number, parentKey?: string) : any[] {
        let data = (level > 0 && level <= 7) ? this.data.filter(element => element.org.level == level) : this.data;
        return (parentKey != null) ? this.data.filter(element => element.parentKey == parentKey) : data; 
	}

    getDataForLevel(currentItems: number, parentKeys: string[], level: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let data = (level > 0 && level <= 7) ? this.data.filter(element => element.org.level == level) : this.data;
        data = (parentKeys.length > 0) ? this.data.filter(element => parentKeys.indexOf(element.parentKey) >= 0) : data;
        let result = (searchValue) ? data.filter(element => this.match(element, searchValue)) : data;
        return of({
        	items: result.slice(0 + currentItems, ((30 + currentItems) < result.length) ? 30 + currentItems : result.length),
        	totalItems: result.length
        });
    }
}
