import { FormlyFieldConfig } from '@ngx-formly/core';

export let awardFilters: FormlyFieldConfig[] = [
  {
	    key: 'keyword',
	    type: 'input',
	    templateOptions: {
	        label: 'Keyword',
          hideOptional: true
	    }
  },
  {
      key: 'dates',
      templateOptions: {
        label: 'Dates',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'signedDate',
          type: 'select',
          templateOptions: {
            label: 'Signed Date',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        },
        {
          key: 'lastModifiedDate',
          type: 'select',
          templateOptions: {
            label: 'Last Modified Date',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        },
        {
          key: 'startDate',
          type: 'select',
          templateOptions: {
            label: 'Start Date',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        },
        {
          key: 'completionDate',
          type: 'select',
          templateOptions: {
            label: 'Completion Date',
            hideOptional: true,
            options: [
              { label: 'Last 24 hours', value: 'one-day' },
              { label: 'Last 2 days', value: 'two-day' },
              { label: 'Last Week', value: 'seven-day' },
              { label: 'Last 30 days', value: 'thirty-day' },
              { label: 'Last 90 days', value: 'ninety-day' },
              { label: 'Custom', value: 'custom-day' }
            ]
          }
        }
      ]
    }
  ];