import { FormlyFieldConfig } from '@ngx-formly/core';

export let assistanceListFilters: FormlyFieldConfig[] = [
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
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Date' },
    fieldGroup: [
        {
          key: 'publishDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Publish Date'
          }
        },
        {
          key: 'updateDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Updated Date'
          }
        }   
     ]
  },
  {
    key: 'hierarchyWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Federal Organizations' },
    fieldGroup: [{
      key: 'hierarchyOrganization',
      type: 'input',
      templateOptions: {
        hideLabel: true
      }
    }]
  },
  {
    key: 'eligibilityWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Eligibility' },
    fieldGroup: [{
      key: 'beneficiary',
      type: 'input',
      templateOptions: {
        label: 'Beneficiary'
      }
    },{
      key: 'recipient',
      type: 'input',
      templateOptions: {
        label: 'Recipient'
      }
    }]
  },
  {
    key: 'assistanceTypeWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Assistance Type' },
    fieldGroup: [{
      key: 'assistanceType',
      type: 'input',
      templateOptions: {
        hideLabel: true
      }
    }]
  },
  {
    key: 'locationWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Location' },
    fieldGroup: [{
      key: 'setAside',
      type: 'input',
      templateOptions: {
        label: 'Zip Code'
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