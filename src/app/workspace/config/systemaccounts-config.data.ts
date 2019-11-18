import { WorkspaceConfig } from './workspace-config.model';

export let SystemAccountsConfig: WorkspaceConfig = 
{
	id: 'system-accounts',
	title: 'System Accounts',
	filters: 
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
	              key: 'Active',
	              value: 'Active'
	            },
	            {
	              key: 'Draft',
	              value: 'Draft'
	            },
	            {
	              key: 'Expired',
	              value: 'Expired'
	            },
	            {
	              key: 'InProgress',
	              value: 'In Progress'
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
};