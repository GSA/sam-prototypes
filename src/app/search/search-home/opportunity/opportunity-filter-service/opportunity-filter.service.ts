import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  AwardIdvTypeService, 
  NaicsService,
  DateRangeService,
  PscService,
  HierarchyService,
  SearchFiltersWrapperService 
} from '../../../../common/public-apis';

import { OpportunityFilterServiceModule } from './opportunity-filter-service.module';

let offersDueService = new DateRangeService();
offersDueService.settings.id = 'offers-due-date';
let publishService = new DateRangeService();
publishService.settings.id = 'publish-date';
let updateService = new DateRangeService();
updateService.settings.id = 'update-date';
let inactiveService = new DateRangeService();
inactiveService.settings.id = 'inactive-date';

@Injectable({
  providedIn: OpportunityFilterServiceModule
})
export class OpportunityFilterService implements SearchFiltersWrapperService {

  constructor(public awardIdvTypeService: AwardIdvTypeService, 
  		public naicsService: NaicsService, 
  		public pscService: PscService,
  		public hierarchyService: HierarchyService) { }

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
	    key: 'hierarchyWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Federal Organizations' },
	    fieldGroup: [{
	      key: 'hierarchyOrganization',
	      type: 'autocomplete',
	      templateOptions: {
	        hideLabel: true,
	        service: this.hierarchyService,
	        configuration: this.hierarchyService.settings,
	        model: this.hierarchyService.model
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
	      type: 'autocomplete',
	      wrappers: ['filterwrapper'],
	      templateOptions: {
	        label: 'NAICS Code',
	        service: this.naicsService,
	        configuration: this.naicsService.settings,
	        model: this.naicsService.model
	      }
	    },{
	      key: 'pscCode',
	      type: 'autocomplete',
	      wrappers: ['filterwrapper'],
	      templateOptions: {
	        label: 'Product Service Code',
	        service: this.pscService,
	        configuration: this.pscService.settings,
	        model: this.pscService.model
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
