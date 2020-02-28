import { FormlyFieldConfig } from '@ngx-formly/core';
import { SearchListConfiguration } from '@gsa-sam/layouts';

export let wageListConfig: SearchListConfiguration = {
  defaultSortValue: "nameAscendingDescending",
  pageSize: 25,
  sortList:
    [
      { text: "WD Number (Low - High)", value: "nameAscending" },
      { text: "WD Number (High - Low)", value: "nameDescending" },
      { text: "Last Revised Date", value: "lastRevisedDescending" }
    ]
};

export let wdidFilters: FormlyFieldConfig[] = [
  {
      key: 'wdid',
      wrappers: ['filterwrapper'],
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Wage Determination ID',
        labelClass:'usa-sr-only'
      }
  },
  {
    key: 'statusWrapper',
    wrappers: ['accordionwrapper'],
    type: 'multicheckbox',
    templateOptions: { 
      label: 'Status',
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
  },
  {
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Published/Revised Date' },
    fieldGroup: [
        {
          key: 'revisedDate',
          type: 'daterangepicker',
          templateOptions: {
            hideLabel: true
          }
        }  
     ]
  }
];

export let dbaFilters: FormlyFieldConfig[] = [
  {
      key: 'state',
      wrappers: ['filterwrapper'],
      type: 'input',
      templateOptions: {
        label: 'State'
      }
  },  
  {
      key: 'county',
      wrappers: ['filterwrapper'],
      type: 'input',
      templateOptions: {
        label: 'County/Independent City'
      }
  },  
  {
      key: 'constructionTypeWrapper',
      wrappers: ['filterwrapper'],
      type: 'input',
      templateOptions: {
        type: 'type',
        label: 'Construction Type'
      }
  },
  {
    key: 'statusWrapper',
    wrappers: ['accordionwrapper'],
    type: 'multicheckbox',
    templateOptions: { 
      label: 'Status',
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
  },
  {
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Published/Revised Date' },
    fieldGroup: [
        {
          key: 'revisedDate',
          type: 'daterangepicker',
          templateOptions: {
            hideLabel: true
          }
        }  
     ]
  }
];

export let scaFilters: FormlyFieldConfig[] = [
  {
      key: 'locationWrapper',
      wrappers: ['filterwrapper'],
      templateOptions: {
        type: 'text',
        label: 'Location',
        labelClass:'usa-sr-only'
      },
      fieldGroup: [
        {
          key: 'state',
          type: 'input',
          templateOptions: {
            label: 'State'
          }
        },  
        {
          key: 'county',
          type: 'input',
          templateOptions: {
            label: 'County/Independent City'
          }
        }
     ]
  },  
  {
      key: 'previouslyPerformedWrapper',
      wrappers: ['filterwrapper'],
      templateOptions: {
        type: 'type',
        label: 'Previously Performed'
      },
      fieldGroup: [
        {
          key: 'previouslyPeformed',
          type: 'input',
          templateOptions: {
            label: "Were these services previously performed under an SCA-Covered contract?"
          }
        }
      ]
  },
  {
    key: 'statusWrapper',
    wrappers: ['accordionwrapper'],
    type: 'multicheckbox',
    templateOptions: { 
      label: 'Status',
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
  },
  {
    key: 'dateWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Published/Revised Date' },
    fieldGroup: [
        {
          key: 'revisedDate',
          type: 'daterangepicker',
          templateOptions: {
            hideLabel: true
          }
        }  
     ]
  }
];