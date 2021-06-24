import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataEntryNavigationLink} from '../../../app-layout/data-entry-layout/data-entry-ui.service';

 
 export let purposeOfRegistrationLinks: DataEntryNavigationLink = {
 	 id: '000',
	 route: null, 
     text: 'Purpose of Registration',
     mode: NavigationMode.LABEL, 
     children: [
     	{
     		id: '001',
     		route: null,
     		text: 'Enter Purpose', 
     		mode: NavigationMode.LABEL,
     		children: null,
     		fields: [
				{
	              wrappers: ["form-field"],
	              key: "identity.legalName",
	              type: "input",
	              templateOptions: {
	                label: "Legal Business Name",
	                description:
	                  "This is the legal business name you used to create your company",
	                required: true,
	              }
	            },
	            {
	              wrappers: ["form-field"],
	              key: "identity.address",
	              type: "input",
	              templateOptions: {
	                label: "Street Address",
	                required: true,
	              }
	            },
	            {
	              wrappers: ["form-field"],
	              key: "identity.city",
	              type: "input",
	              templateOptions: {
	                label: "City",
	                required: true,
	              }
	            },
	            {
	              wrappers: ["form-field"],
	              key: "identity.state",
	              type: "input",
	              templateOptions: {
	                label: "State",
	                required: true,
	              }
	            },
	            {
	              wrappers: ["form-field"],
	              key: "identity.zip",
	              type: "input",
	              templateOptions: {
	                label: "Zip Code",
	                required: true,
	              }
	            }
	        ]
     	},
     	{
     		id: '002',
     		route: null,
     		text: 'Enter Purpose',
     		mode: NavigationMode.LABEL,
     		children: null,
     		fields: [

     		]
     	},
     	{
     		id: '003',
     		route: null,
     		text: 'Enter Purpose',
     		mode: NavigationMode.LABEL,
     		children: null,
     		fields: [

     		]
     	}
     ]
};
