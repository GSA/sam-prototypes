import { Injectable } from '@angular/core';
import { UeiDunsServiceModule } from './uei-duns-service.module';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

let dunsNumbers = [
    { 'uei': '123456789' },
    { 'uei': '234567890' },
    { 'uei': '345678901' },
    { 'uei': '456789012' },
    { 'uei': '567890123' },
    { 'uei': '678901234' },
    { 'uei': '789012345' },
    { 'uei': '890123456' },
    { 'uei': '901234567' },
    { 'uei': '012345678' },
    { 'uei': '134567890' },
    { 'uei': '145678901' },
    { 'uei': '124567890' },
    { 'uei': '123567890' },
    { 'uei': '123467890' },
    { 'uei': '123457890' },
    { 'uei': '123456890' }
];

@Injectable({
  providedIn: UeiDunsServiceModule
})
export class UeiDunsService implements SDSAutocompleteServiceInterface {
	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

   	constructor() {
		this.settings.id = 'uei-duns';
		this.settings.primaryKeyField = 'uei';
		this.settings.primaryTextField = 'uei';
		this.settings.secondaryTextField = null;
		this.settings.labelText = 'name';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = 'Enter ID...';
		this.settings.debounceTime = 100;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? dunsNumbers.filter(element => element.uei.indexOf(searchValue) >=0) : dunsNumbers;
        return of({
        	items: result,
        	totalItems: result.length
        });
    }
}