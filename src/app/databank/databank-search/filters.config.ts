import { FormlyFieldConfig } from '@ngx-formly/core';

export let filters: FormlyFieldConfig[] = [
{
	    key: 'keyword',
	    type: 'input',
        wrappers: ['label'],
	    templateOptions: {
	        label: 'Keyword',
            hideOptional: true
	    }
  },
  {
      key: 'domain',
      type: 'multicheckbox',
      wrappers: ['label'],
      templateOptions: {
        label: 'Domain',
        options: [
          {
            key: 'fal',
            value: 'Assistance Listings'
          },
          {
            key: 'opps',
            value: 'Contract Opportunities'
          },
          {
            key: 'cdata',
            value: 'Contract Data'
          },
          {
            key: 'fh',
            value: 'Federal Hierarchy'
          }
        ]
      }
   },
   {
      key: 'reportType',
      type: 'multicheckbox',
      wrappers: ['label'],
      templateOptions: {
        label: 'Report Type',
        options: [
          {
            key: 'standard',
            value: 'Standard Reports'
          },
          {
            key: 'admin',
            value: 'Administrative Reports'
          }
        ]
      }
   }
];