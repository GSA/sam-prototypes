import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  SearchFiltersWrapperService 
} from '../../common/public-apis';

export class SystemAccountsFiltersService implements SearchFiltersWrapperService {

  constructor() { }

  public model = {};

  public filters: FormlyFieldConfig[] =
	[{
	    key: 'searchKeyword',
	    wrappers: ['filterwrapper'],
	    templateOptions: { label: 'Keyword' },
	    fieldGroup: [{
	      key: 'keyword',
	      type: 'input',
	      templateOptions: {
	        inputType: 'text',
	        label: 'Keyword',
	        hideLabel: true
	      },

	    }]
	  },
	  {
	    key: 'account',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Status' },
	    fieldGroup: [
	      {
	        key: 'accountStatus',
	        type: 'multicheckbox',
	        templateOptions: {
	          options: [
	            {
	              key: 'Draft',
	              value: 'Draft'
	            },
	            {
	              key: 'Pending Approval',
	              value: 'Pending Approval'
	            },
	            {
	              key: 'Active',
	              value: 'Active'
	            },
	            {
	              key: 'Rejected',
	              value: 'Rejected'
	            },
	            {
	              key: 'Inactive',
	              value: 'Inactive'
	            }
	          ]
	        },
	      }
	    ]
	  },
	  {
	      key: 'expiration',
	      wrappers: ['accordionwrapper'],
	      type: 'radio',
	      templateOptions: {
	        label: 'Expiration Date',
	        options: [
	          { label: '30 Days', value: '30' },
	          { label: '60 Days', value: '60' },
	          { label: '90 Days', value: '90' },
	        ]
	      }
	   }
	]
}
