import { FormlyFieldConfig } from '@ngx-formly/core';

export const SearchAllFields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword',
        },

      }]
    },
    {
      key: 'isActive',
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
                key: 'inactive',
                value: 'Not Active'
              }
            ]
          },
        }
      ]
    }
  ];