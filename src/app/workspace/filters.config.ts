import { FormlyFieldConfig } from '@ngx-formly/core';

export let registrationFilters: FormlyFieldConfig[] = [
  {
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
      key: 'searchEntity',
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
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
        	key: 'cageCode',
        	type: 'input',
        	templateOptions: {
        		type: 'text',
        		label: 'CAGE / NCAGE',
        	}
        }
      ],
    },
  {
    key: 'registration',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Status' },
    fieldGroup: [
      {
        key: 'registrationStatus',
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
];

export let FilterConfigurations = new Map([['registrations', registrationFilters]]);
