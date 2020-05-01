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

   	constructor() {
		this.settings.id = 'naics';
		this.settings.primaryKeyField = 'naicsCode';
		this.settings.primaryTextField = 'naicsCode';
		this.settings.secondaryTextField = 'naicsTitle';
		this.settings.labelText = 'NAICS Code';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Ex: 119203';
		this.settings.debounceTime = 100;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? naicsData.filter(element => element.naicsCode.startsWith(searchValue)) : naicsData;
        return of({
        	items: result,
        	totalItems: result.length
        });
    }
}
