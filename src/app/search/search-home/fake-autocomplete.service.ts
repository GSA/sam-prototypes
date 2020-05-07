
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';

export class FakeAutocompleteService implements SDSAutocompleteServiceInterface {
	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
    private data: object[]= [];

   	constructor() {
		this.settings.id = 'keyword';
		this.settings.primaryKeyField = 'value';
		this.settings.primaryTextField = 'value';
		this.settings.secondaryTextField = null;
		this.settings.labelText = 'Keyword';
		this.settings.selectionMode = SelectionMode.MULTIPLE;
		this.settings.autocompletePlaceHolderText = '';
		this.settings.debounceTime = 100;
		this.settings.isFreeTextEnabled = true;
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return of({
        	items: this.data,
        	totalItems: this.data.length
        });
    }
}