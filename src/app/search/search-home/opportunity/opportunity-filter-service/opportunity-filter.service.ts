import { Observable, of } from 'rxjs';
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

import { FakeAutocompleteService } from '../../fake-autocomplete.service';

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
  		public dateRangeService: DateRangeService,
  		public hierarchyService: HierarchyService) { }

  public model = {};

  keywordService: FakeAutocompleteService = new FakeAutocompleteService();

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
	      key: 'title',
	      type: 'input',
	      templateOptions: {
	        type: 'text',
	        label: 'Title',
            hideOptional: true,
	        labelClass:'usa-sr-only'
	      }
	},
    {
      key: 'dates',
      templateOptions: {
        label: 'Dates',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'dateOffersDue',
          type: 'select',
          templateOptions: {
            label: 'Current Date Offers Due',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        },
        {
          key: 'dateUpdated',
          type: 'select',
          hide: true,
          templateOptions: {
            label: 'Last Updated Date',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        }
      ]
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
	    key: 'noticeType',
	    type: 'autocomplete',
	    templateOptions: {
	    	label: 'Notice Type',
	    	group: 'accordion',
	    	expand: false,
	        service: this.awardIdvTypeService,
	        configuration: this.awardIdvTypeService.settings,
	        model: this.awardIdvTypeService.model
	    }
	 }
  ];
  public oldfilters: FormlyFieldConfig[] = [
	  {
		    key: 'keyword',
		    type: 'autocomplete',
		    templateOptions: {
		        label: 'Keyword',
		        service: this.keywordService,
		        configuration: this.keywordService.settings,
		        model: this.keywordService.model
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
	  	templateOptions: { label: 'Date '},
	  	fieldGroup: [{
	  		key: 'dateOffersDue',
	  		type: 'autocomplete',
	  		templateOptions: {
	  		  label: 'Date Current Offers Due',
	  		  service: this.dateRangeService,
	  		  configuration: this.dateRangeService.settings,
	  		  model: this.dateRangeService.model
	  		}
	  	}]
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
