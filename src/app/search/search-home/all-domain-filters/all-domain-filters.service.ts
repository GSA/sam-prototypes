import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  AwardIdvTypeService, 
  SearchFiltersWrapperService 
} from '../../../common/public-apis';

import { AllDomainFiltersModule } from './all-domain-filters.module';

@Injectable({
  providedIn: AllDomainFiltersModule
})
export class AllDomainFiltersService implements SearchFiltersWrapperService {

  constructor() { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
	  {
	      key: 'keyword',
	      wrappers: ['filterwrapper'],
	      type: 'input',
	      templateOptions: {
	        type: 'text',
	        label: 'Keyword',
	        labelClass:'usa-sr-only'
	      }
	  },
	  {
	    key: 'statusWrapper',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'Status' },
	    fieldGroup: [
	      {
	        key: 'status',
	        type: 'multicheckbox',
	        templateOptions: {
	          hideLabel: true,
	          options: [
	            {
	              key: 'Active',
	              value: 'Active'
	            },
	            {
	              key: 'Inactive',
	              value: 'Inactive'
	            }
	          ]
	        }
	      }
	    ]
	  }
	];
}
