import { FormlyFieldConfig } from '@ngx-formly/core';
import { SearchListConfiguration } from '@gsa-sam/layouts';

export let searchSaveListConfig: SearchListConfiguration = {
    defaultSortValue: "lastRunDateDescending",
    pageSize: 25,
    sortList:
    [
      { text: "Run Date (Latest)", value: "runDateDescending" },
      { text: "Run Date (Earliest)", value: "runDateAscending" },
      { text: "Title (A - Z)", value: "titleAscending" },
      { text: "Title (Z - A)", value: "titleDescending" }
    ]
};


export let searchSaveListFilters: FormlyFieldConfig[] = [
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
          key: 'runDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Run Date'
          }
        },
        {
          key: 'saveDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Save Date'
          }
        }   
     ]
  }
];