import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'system-accounts-filters',  
  template:  `  
    <sds-filters #filters [advancedFilters]="false" [form]="form"
    [fields]="fields" [model]="filterModel">
    </sds-filters>
  `
})
export class SystemAccountsFiltersComponent implements OnInit {

  public filterModel = {
    unused: true,
    elementKey: '100000000'
  };

  form = new FormGroup({});

  public fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
          label: 'Keyword',
          hideOptional: true
      }
    },
    {
      key: 'accountStatus',
      type: 'multicheckbox',
      templateOptions: { 
          label: 'Status',
          group: 'accordion',
          expand: true,
          options: [
              {
                value: 'Draft',
                label: 'Draft'
              },
              {
                value: 'Pending Approval',
                label: 'Pending Approval'
              },
              {
                value: 'Active',
                label: 'Active'
              },
              {
                value: 'Rejected',
                label: 'Rejected'
              },
              {
                value: 'Inactive',
                label: 'Inactive'
              }
            ] 
        }
    },
    {
        key: 'expiration',
        type: 'radio',
        templateOptions: {
          label: 'Expiration Date',
          group: 'accordion',
          expand: true,
          options: [
            { label: '30 Days', value: '30' },
            { label: '60 Days', value: '60' },
            { label: '90 Days', value: '90' },
          ]
        }
     }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
