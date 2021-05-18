import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'entity-registration-filters',
  template:  `	
    <sds-filters #filters [advancedFilters]="false" [form]="form"
		[fields]="fields" [model]="filterModel">
    </sds-filters>
  `
})
export class EntityRegistrationFiltersComponent implements OnInit {

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
      key: 'level',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Entity',
        group: 'accordion',
        expand: false,
        options: [
              { label: 'Sub Tier', value: 'SUB TIER' },
              { label: 'Major Command', value: 'MAJOR COMMAND' },
              { label: 'Sub Command', value: 'SUB COMMAND' },
              { label: 'Office', value: 'OFFICE' }
        ]
      }
    },
    {
      key: 'Location',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Office Type',
        group: 'accordion',
        expand: false,
        options: [
              { label: 'Funding', value: 'funding' },
              { label: 'Awarding', value: 'awarding' }
        ]
      }
    },
    {
      key: 'status',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Status',
        group: 'accordion',
        expand: false,
        options: [
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' }
        ]
      }
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

