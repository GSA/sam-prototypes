import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  HierarchyService,
  SearchFiltersWrapperService 
} from '../../../common/public-apis';

import { FakeAutocompleteService } from '../fake-autocomplete.service';

import { AllDomainFiltersModule } from './all-domain-filters.module';

@Injectable({
  providedIn: AllDomainFiltersModule
})
export class AllDomainFiltersService implements SearchFiltersWrapperService {

  keywordService: FakeAutocompleteService = new FakeAutocompleteService();

  constructor(public hierarchyService: HierarchyService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
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
	    key: 'hierarchy',
	    type: 'autocomplete',
	    templateOptions: {
	      label: 'Federal Organizations',
	      group: 'accordion',
	      expand: false,
	      service: this.hierarchyService,
	      configuration: this.hierarchyService.settings,
	      model: this.hierarchyService.model
	    }
	 },
	 {
	    key: 'status',
	    type: 'multicheckbox',
	    templateOptions: {
	    	label: 'Status',
	    	group: 'accordion',
	    	expand: false,
	    	options: [
	    		{
	    			label: 'Active',
	    			value: 'Active'
	    		},
	    		{
	    			label: 'Inactive',
	    			value: 'Inactive'
	    		}
	    	]
	    }
	 }
  ];
}
