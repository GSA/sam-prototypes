import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  DateRangeService
} from '../../common/public-apis';

let publishDateRangeService = new DateRangeService();
let modifiedDateRangeService = new DateRangeService();

export let assistanceFilters: FormlyFieldConfig[] = [
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
    key: 'organization',
    wrappers: ['filterwrapper'],
    type: 'input',
    templateOptions: {
        inputType: 'text',
        label: 'Federal Hierarchy',
        hideLabel: true
    }
  },
  {
    key: 'status',
    wrappers: ['filterwrapper'],
    type: 'multicheckbox',
    templateOptions: { 
      label: 'Status',
      options: [
            {
              key: 'Select All',
              value: 'Select All'
            },
            {
              key: 'Draft Review',
              value: 'Draft Review'
            },
            {
              key: 'Archived',
              value: 'Archived'
            },
            {
              key: 'Rejected',
              value: 'Rejected'
            },
            {
              key: 'Published',
              value: 'Published'
            },
            {
              key: 'Pending OMB',
              value: 'Pending OMB'
            },
            {
              key: 'Draft',
              value: 'Draft'
            }
          ]

    }
  },
  {
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Date '},
    fieldGroup: [{
      key: 'publishDate',
      type: 'autocomplete',
      templateOptions: {
        label: 'Publish Date',
        service: publishDateRangeService,
        configuration: publishDateRangeService.settings,
        model: publishDateRangeService.model
      }
    },{
      key: 'modifiedDate',
      type: 'autocomplete',
      templateOptions: {
        label: 'Last Modified Date',
        service: modifiedDateRangeService,
        configuration: modifiedDateRangeService.settings,
        model: modifiedDateRangeService.model
      }
    }]
  }
];
