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
} from '../../../common/public-apis';
import { keywordFilter } from '../common/keywordfilter';

let offersDueService = new DateRangeService();
offersDueService.settings.id = 'offers-due-date';
let publishService = new DateRangeService();
publishService.settings.id = 'publish-date';
let updateService = new DateRangeService();
updateService.settings.id = 'update-date';
let inactiveService = new DateRangeService();
inactiveService.settings.id = 'inactive-date';

@Injectable()
export class ContractOpportunityFiltersService implements SearchFiltersWrapperService {

  constructor(public awardIdvTypeService: AwardIdvTypeService, 
  		public naicsService: NaicsService, 
  		public pscService: PscService,
  		public dateRangeService: DateRangeService,
  		public hierarchyService: HierarchyService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
	keywordFilter, 
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
          key: 'dueDate',
          type: 'select',
          templateOptions: {
            label: 'Response/Offers Due Date',
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
          key: 'updatedDate',
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
        },
        {
          key: 'publishedDate',
          type: 'select',
          hide: true,
          templateOptions: {
            label: 'Published Date',
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
          key: 'inactiveDate',
          type: 'select',
          hide: true,
          templateOptions: {
            label: 'Inactive Date',
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
	 }, 
    {
      key: 'entity',
      templateOptions: {
        label: 'Entity',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'ueiDuns',
          type: 'input',
          templateOptions: { 
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 9,
            max: 9,
            inputType: 'number',
            inputStyle: 'error',
            hideOptional: true
          }
        },
        {
          key: 'ueiSam',
          type: 'input',
          templateOptions: { 
            tagText: 'SAM',
            tagClass: 'sds-tag--info-white',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 13,
            max: 13,
            hideOptional: true
          }
        },
        {
          key: 'cageCode',
          type: 'input',
          templateOptions: {
            label: 'CAGE Code',
            hideOptional: true,
          }
        },      
        {
          key: 'entityName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            hideOptional: true,
          }
        }
      ]
    }, 
    {
      key: 'productsAndServices',
      templateOptions: {
        label: 'Products and Services',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'naicsCode',
          type: 'input',
          templateOptions: {
            label: 'NAICS Code',
            hideOptional: true
          }
        },
        {
          key: 'psc',
          type: 'input',
          templateOptions: {
            label: 'Product Service Code',
            hideOptional: true
          }
        }
      ]
    }, 
    {
      key: 'pop',
      templateOptions: {
        label: 'Place of Performance',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'popState',
          type: 'input',
          templateOptions: {
            label: 'State',
            hideOptional: true
          }
        },
        {
          key: 'popZipCode',
          type: 'input',
          templateOptions: {
            label: 'Zip Code',
            hideOptional: true
          }
        }
      ]
    },
	{
		key: 'setAside',
		type: 'input',
		templateOptions: {
		    group: 'accordion',
		    expand: false,
			label: 'Set Aside',
			hideOptional: true
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
            value: 'Active',
            label: 'Active'
          },
          {
            value: 'Inactive',
            label: 'Inactive'
          }
        ]
      }
   }
  ];
}
