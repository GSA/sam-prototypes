import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SystemAccountsFiltersModule } from './system-accounts-filters.module';

@Injectable({
  providedIn: SystemAccountsFiltersModule
})
export class SystemAccountsFiltersService {

  public model = {};

  public filters: FormlyFieldConfig[] = [
     {
	    key: 'keyword',
	    wrappers: ['filterwrapper'],
	    type: 'input',
	    templateOptions: { 
	      label: 'Keyword',
	    }
	  },
	  {
	    key: 'accountStatus',
	    wrappers: ['accordionwrapper'],
	    type: 'multicheckbox',
	    templateOptions: { 
	        label: 'Status',
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
	      }
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
	];
}
