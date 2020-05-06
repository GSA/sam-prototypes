import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
 
import { ScaFilterServiceModule } from './sca-filter-service.module';

import {
  SearchFiltersWrapperService 
} from '../../../../common/public-apis';

@Injectable({
  providedIn: 'root'
})
export class ScaFilterService implements SearchFiltersWrapperService {

  public model = {};

  public filters: FormlyFieldConfig[] = [
	 {
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'State' },
	    type: 'input'
  	},
	{
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'County / Independent City' },
	    type: 'input'
  	},
	{
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'Previously Performed' },
	    type: 'input'
  	},
	{
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'Subject to CBA' },
	    type: 'input'
  	},
	{
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'Non-Standard Services' },
	    type: 'input'
  	},
	{
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'If a service is chosen, "Yes" will automatically be selected' },
	    type: 'input'
  	}
  ];
}
