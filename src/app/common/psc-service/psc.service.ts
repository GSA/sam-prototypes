import { Injectable } from '@angular/core';
import { PscServiceModule } from './psc-service.module';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';
import { pscData } from './psc.data';

@Injectable()
export class PscService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
   	public data;

   	constructor() {
		this.settings.id = 'psc';
		this.settings.primaryKeyField = 'psc_code';
		this.settings.primaryTextField = 'psc_code';
		this.settings.secondaryTextField = 'psc_name';
		this.settings.labelText = 'Product Service Code';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Ex: R610';
		this.settings.debounceTime = 100;
		this.data = this.initData();
	}

	initData() {
		return pscData.sort((a, b) => { 
            if(a.psc_code.length != b.psc_code.length) {
            	return a.psc_code.length - b.psc_code.length;
            } else if( a.psc_code > b.psc_code ) {
            	return 1;
            } else {
            	return -1;
            }

		});
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => element.psc_code.startsWith(searchValue)) : this.data;
        return of({
        	items: result.slice(0 + currentItems, ((30 + currentItems) < result.length) ? 30 + currentItems : result.length),
        	totalItems: result.length
        });
    }
}

