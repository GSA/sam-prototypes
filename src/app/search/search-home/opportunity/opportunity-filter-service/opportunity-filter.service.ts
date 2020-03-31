import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  AwardIdvTypeService, 
  SearchFiltersWrapperService 
} from '../../../../common/public-apis';

import { OpportunityFilterServiceModule } from './opportunity-filter-service.module';

@Injectable({
  providedIn: OpportunityFilterServiceModule
})
export class OpportunityFilterService implements SearchFiltersWrapperService {

  constructor(public awardIdvTypeService: AwardIdvTypeService) { }

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
	      key: 'title',
	      wrappers: ['filterwrapper'],
	      type: 'input',
	      templateOptions: {
	        type: 'text',
	        label: 'Title',
	        labelClass:'usa-sr-only'
	      }
	  },
	  {
	    key: 'dateWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Date' },
	    fieldGroup: [
	        {
	          key: 'responseDate',
	          type: 'daterangepicker',
	          templateOptions: {
	            label: 'Current Date Offers Due'
	          }
	        },
	        {
	          key: 'publishDate',
	          type: 'daterangepicker',
	          templateOptions: {
	            label: 'Publish Date'
	          }
	        },
	        {
	          key: 'updateDate',
	          type: 'daterangepicker',
	          templateOptions: {
	            label: 'Last Modified Date'
	          }
	        },
	        {
	          key: 'inactiveDate',
	          type: 'daterangepicker',
	          templateOptions: {
	            label: 'Inactive Date'
	          }
	        }    
	     ]
	  },
	  {
	    key: 'hierarchyWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Federal Organizations' },
	    fieldGroup: [{
	      key: 'hierarchyOrganization',
	      type: 'input',
	      templateOptions: {
	        hideLabel: true
	      }
	    }]
	  },
	  {
	    key: 'noticeTypeWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Notice Type' },
	    fieldGroup: [{
	      key: 'noticeType',
	      type: 'autocomplete',
	      templateOptions: {
	        hideLabel: true,
	        service: this.awardIdvTypeService,
	        configuration: this.awardIdvTypeService.settings,
	        model: this.awardIdvTypeService.model
	      }
	    }]
	  },
	  {
	      key: 'entityWrapper',
	      wrappers: ['accordionwrapper'],
	      templateOptions: { label: 'Entity' },
	      fieldGroup: [
	        {
	          key: 'legalBusinessName',
	          type: 'input',
	          templateOptions: {
	            type: 'text',
	            label: 'Entity Name',
	          }
	        },
	        {
	          key: 'uniqueEntityIdDuns',
	          type: 'input',
	          templateOptions: {
	            tagText: 'DUNS',
	            tagClass: 'sds-tag--info-purple',
	            label: 'Unique Entity ID',
	            placeholder: '',
	            min: 13,
	            max: 40,
	            inputType: 'number',
	            inputStyle: 'error',
	          }
	        },
	        {
	          key: 'uniqueEntityIdSam',
	          type: 'input',
	          templateOptions: {
	            tagText: 'SAM',
	            label: 'Unique Entity ID',
	            placeholder: '',
	            inputType: 'text',
	          }
	        },
	        {
	          key: 'cageCode',
	          type: 'input',
	          templateOptions: {
	            type: 'text',
	            label: 'CAGE / NCAGE',
	          }
	        }
	      ]
	  },
	  {
	    key: 'serviceClassificationsWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'NAICS and Product Service Codes' },
	    fieldGroup: [{
	      key: 'naicsCode',
	      type: 'input',
	      templateOptions: {
	        label: 'NAICS Code'
	      }
	    },{
	      key: 'pscCode',
	      type: 'input',
	      templateOptions: {
	        label: 'Product Service Code'
	      }
	    }]
	  },
	  {
	    key: 'setAsideWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Set Aside' },
	    fieldGroup: [{
	      key: 'setAside',
	      type: 'input',
	      templateOptions: {
	        hideLabel: true
	      }
	    }]
	  },
	  {
	    key: 'popWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Place of Performance' },
	    fieldGroup: [{
	      key: 'popZipCode',
	      type: 'input',
	      templateOptions: {
	        label: 'Zip Code'
	      }
	    },{
	      key: 'popState',
	      type: 'input',
	      templateOptions: {
	        label: 'State'
	      }
	    }]
	  },
	  {
	    key: 'statusWrapper',
	    wrappers: ['accordionwrapper'],
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
