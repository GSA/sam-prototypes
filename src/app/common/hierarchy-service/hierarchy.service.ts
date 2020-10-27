import { Injectable } from '@angular/core';
import { HierarchyServiceModule } from './hierarchy-service.module';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';
import { hierarchyData } from './hierarchy.data';


@Injectable()
export class HierarchyService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
   	public data;

   	constructor() {
		this.settings.id = 'hierarchy';
		this.settings.primaryKeyField = 'key';
		this.settings.primaryTextField = 'displayLabel';
		this.settings.secondaryTextField = 'levelLabel';
		this.settings.labelText = 'Federal Organization';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = '';
		this.settings.debounceTime = 100;
		this.data = this.initData();
	}

	initData() {
	    for(let i=0; i<hierarchyData.length; i++) {
	    	let next:any = hierarchyData[i];
	    	next.displayLabel = next.org.fpdsCode + ' - ' + next.org.name;
	    	next.levelLabel = next.org.type;
	    	next.key = next.org.orgKey.toString();
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

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => this.match(element, searchValue)) : this.data;
        return of({
        	items: result.slice(0 + currentItems, ((30 + currentItems) < result.length) ? 30 + currentItems : result.length),
        	totalItems: result.length
        });
    }
}

