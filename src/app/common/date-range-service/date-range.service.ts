import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';
import { DateRangeServiceModule } from './date-range-service.module';

let dateRanges = [
    { 'label': 'Past 24 Hours', 'value': 'past-day' },
    { 'label': 'Past 2 Days', 'value': 'past-2-days' },
    { 'label': 'Past Week', 'value': 'past-week' },
    { 'label': 'Past 2 Weeks', 'value': 'past-2-weeks' },
    { 'label': 'Past 30 Days', 'value': 'past-30-days' },
    { 'label': 'Past 90 Days', 'value': 'past-90-days' },
    { 'label': 'Custom', 'value': 'custom' }
];

export class DateRangeService implements SDSAutocompleteServiceInterface {

	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

   	constructor() {
		this.settings.id = 'date-range';
		this.settings.primaryKeyField = 'value';
		this.settings.primaryTextField = 'label';
		this.settings.secondaryTextField = null;
		this.settings.labelText = 'Date Range';
		this.settings.selectionMode = SelectionMode.SINGLE;
		this.settings.autocompletePlaceHolderText = 'Select...';
		this.settings.debounceTime = 100;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return of({
        	items: dateRanges,
        	totalItems: dateRanges.length
        });
    }
}

