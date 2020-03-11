import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel, 
		 SDSAutocompletelConfiguration, 
		 SelectionMode } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';

class FakeAutocompleteService implements SDSAutocompleteServiceInterface {
	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();
   	public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
    private data: object[]= [];

   	constructor() {
		this.settings.id = 'keyword';
		this.settings.primaryKeyField = '';
		this.settings.primaryTextField = '';
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

@Injectable({
  providedIn: 'root'
})
export class HelpFiltersService {

  keywordService: FakeAutocompleteService = new FakeAutocompleteService();
  constructor() { }

  config: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    type: 'autocomplete',
    templateOptions: {
        label: 'Keyword',
        service: this.keywordService,
        configuration: this.keywordService.settings,
        model: this.keywordService.model
    }
  },
  {
    key: 'searchKeyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Keyword' },
    fieldGroup: [{
      key: 'keyword',
      type: 'input',
      templateOptions: {
        inputType: 'text',
        label: 'Keyword',
        hideLabel: true
      },
    }]
  },
  {
    key: 'helpType',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Type' },
    fieldGroup: [
      {
        key: 'registrationStatus',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'video',
              value: 'Video'
            },
            {
              key: 'article',
              value: 'Article'
            },
            {
              key: 'faq',
              value: 'Frequently Asked Question'
            },
            {
              key: 'term',
              value: 'Glossary Term'
            }
          ]
        },
      }
    ]
  }
];

}