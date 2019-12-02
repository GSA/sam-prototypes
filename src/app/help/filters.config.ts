import { FormlyFieldConfig } from '@ngx-formly/core';

export let helpFilters: FormlyFieldConfig[] = [
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
    key: 'helpType',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Type' },
    fieldGroup: [
      {
        key: 'registrationStatus',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'video',
              value: 'Video'
            },
            {
              key: 'article',
              value: 'Article'
            },
            {
              key: 'faq',
              value: 'Frequently Asked Question'
            },
            {
              key: 'term',
              value: 'Glossary Term'
            }
          ]
        },
      }
    ]
  }
];