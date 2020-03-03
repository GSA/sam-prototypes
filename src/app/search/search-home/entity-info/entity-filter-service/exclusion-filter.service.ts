import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
 
import { EntityFilterServiceModule } from './entity-filter-service.module';

import { UeiDunsService, EntityNameService } from '../../../../common/public-apis';

import {
  SearchFiltersWrapperService 
} from '../../../../common/public-apis';

@Injectable({
  providedIn: EntityFilterServiceModule
})
export class ExclusionFilterService implements SearchFiltersWrapperService {

  public model;
  public filters: FormlyFieldConfig[];

  constructor(public ueiDunsService: UeiDunsService, public entityNameService: EntityNameService) {


     this.model = {};
     this.filters = [
	 {
	      key: 'requestTypesOptions',
	      wrappers: ['filterwrapper'],
	      type: 'radio',
	      defaultValue: 'myagencyexclusions',
	      templateOptions: {
	            label: 'Exclusions Type', 
	            labelClass: 'usa-sr-only',
	            options: [
	                { label: 'Agency Exclusions', value: 'myagencyexclusions' },
	                { label: 'My Exclusions', value: 'myexclusions' }
	            ]
	      }
	    }, 
	    {
	        key: 'searchKeyword',
	        wrappers: ['filterwrapper'],
	        type: 'input',
	        templateOptions: {
	          type: 'text',
	          label: 'Keyword',
	          labelClass:'usa-sr-only'
	        }
	    },
	    {
	      key: 'classificationType',
	      wrappers: ['filterwrapper'],
	      type: 'select',
	      defaultValue: '',
	      templateOptions: { 
	        label: 'Classification', 
	        labelClass: 'usa-sr-only',
	        options: [
	            { label: 'Please Select a Value', value: '' },
	            { label: 'Firm', value: 'Firm' },
	            { label: 'Individual', value: 'Individual' },
	            { label: 'Vessel', value: 'Vessel' },
	            { label: 'Special Entity Designation', value: 'Special Entity Designation' }
	          ],
	      }
	    },
	    { 
	      key: 'individual',
	      wrappers: ['accordionwrapper'],
	      templateOptions: { label: 'Individual'},
	      hideExpression: () => {
	          return !this.model.classificationType || this.model.classificationType != 'Individual';
	      },
	      fieldGroup: [
	        {
	          key: 'firstName',
	          type: 'input',
	          id: 'firstName',
	          templateOptions: {
	            label: 'First Name',
	            hideOptional: true,
	            placeholder: '',
	            inputType: 'text',
	          }
	        },
	        {
	          key: 'middleName',
	          type: 'input',
	          templateOptions: {
	            label: 'Middle Name',
	            hideOptional: true,
	            placeholder: '',
	            inputType: 'text'
	          }
	        },
	        {
	          key: 'lastName',
	          type: 'input',
	          templateOptions: {
	            label: 'Last Name',
	            hideOptional: true,
	            placeholder: '',
	            inputType: 'text'
	          }
	        }
	      ]
	    },
	    {
	      key: 'organization',
	      wrappers: ['accordionwrapper'],
	      templateOptions: { label: 'Organization' },
	      hideExpression: () => {
	      	 return this.model.classificationType && this.model.classificationType == 'Individual';
	      },
	      fieldGroup: [
	      	{
	          key: 'duns',
	          id: 'duns',
	          type: 'input',
	          templateOptions: {
	        	tagText: 'DUNS',
	            tagClass: 'sds-tag--info-purple',
	            label: 'Unique Entity ID',
	            service: this.ueiDunsService,
	            configuration: this.ueiDunsService.settings,
	            model: this.ueiDunsService.model
	          }
	         },
	         {
	            key: 'uniqueEntityIdSam',
	            type: 'input',
	            hideExpression: () => {
	              return false;
				      },
	            templateOptions: {
	           	   tagText: 'SAM',
	               label: 'Unique Entity ID',
	               placeholder: '',
	               inputType: 'text',
	               inputStyle: 'error',
	             }
	         },
	         {
	          key: 'legalBusName',
	          type: 'input',
	          templateOptions: {
	            label: 'Legal Business Name',
	            placeholder: '',
	            service: this.entityNameService,
	            model: this.entityNameService.model,
	            configuration: this.entityNameService.settings
	          }
	        }
	      ]
	    },
	    {
	      key: 'status',
	      wrappers: ['accordionwrapper'],
	      type: 'multicheckbox',
	      templateOptions: { 
	        label: 'Status',
	        labelClass: 'usa-sr-only',
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
	    },
	    {
	        key: 'terminationDate',
	        wrappers: ['accordionwrapper'],
	        type: 'daterangepicker',
	        templateOptions: { label: 'Termination Date' }
	    },
	    {
	        key: 'activeDate',
	        wrappers: ['accordionwrapper'],
	        type: 'daterangepicker',
	        templateOptions: { label: 'Active Date' }
	    }
  ];
  }
}

