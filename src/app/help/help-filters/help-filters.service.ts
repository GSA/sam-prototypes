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

@Injectable({
  providedIn: 'root'
})
export class HelpFiltersService {

  keywordService: FakeAutocompleteService = new FakeAutocompleteService();
  public model = {};

  constructor() { }

  config: FormlyFieldConfig[] = [
  {
    key: 'keyword',
      type: 'autocomplete',
      templateOptions: {
          label: 'Keyword',
          hideOptional: true,
          service: this.keywordService,
          configuration: this.keywordService.settings,
          model: this.keywordService.model
      }
  },
  {
      key: 'type',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Type',
        options: [
          {
            value: 'video',
            label: 'Video'
          },
          {
            value: 'article',
            label: 'Article'
          },
          {
            value: 'faq',
            label: 'Frequently Asked Question'
          },
          {
            value: 'term',
            label: 'Glossary Term'
          },
          {
            value: 'qsg',
            label: 'Quick StartGuide'
          }
        ]
      }
   }
];

}