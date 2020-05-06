import { FormlyFieldConfig } from '@ngx-formly/core';

export let filters: FormlyFieldConfig[] = [
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