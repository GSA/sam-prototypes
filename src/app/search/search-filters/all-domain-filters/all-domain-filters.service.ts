import { Injectable } from '@angular/core';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { keywordFilter } from '../common/keywordfilter';
import { 
  HierarchyService,
  SearchFiltersWrapperService 
} from '../../../common/public-apis';


@Injectable()
export class AllDomainFiltersService implements SearchFiltersWrapperService {

  constructor(public hierarchyService: HierarchyService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
		keywordFilter,
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
