import { Injectable } from '@angular/core';
import { NaicsServiceModule } from './naics-service.module';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';
import { naicsData } from './naics.data';

export class NaicsService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
   	public data;

   	constructor() {
		this.settings.id = 'naics';
		this.settings.primaryKeyField = 'naics_code';
		this.settings.primaryTextField = 'naics_code';
		this.settings.secondaryTextField = 'naics_title';
		this.settings.labelText = 'NAICS Code';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Ex: 119203';
		this.settings.debounceTime = 100;
		this.data = this.initData();
	}

	initData() {
		return naicsData.sort((a, b) => { 
            if(a.naics_code.length != b.naics_code.length) {
            	return a.naics_code.length - b.naics_code.length;
            } else if( a.naics_code > b.naics_code ) {
            	return 1;
            } else {
            	return -1;
            }

		});
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => element.naics_code.toLowerCase().startsWith(searchValue.toLowerCase())) : this.data;
        return of({
        	items: result.slice(0 + currentItems, ((30 + currentItems) < result.length) ? 30 + currentItems : result.length),
        	totalItems: result.length
        });
    }
}
