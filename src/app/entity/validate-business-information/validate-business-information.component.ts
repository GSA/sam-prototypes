import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-validate-business-information',
  templateUrl: './validate-business-information.component.html'
})
export class ValidateBusinessInformationComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'identity.legalBusinessName',
      type: 'input',
      templateOptions: {
        label: 'Legal Business Name',
        placeholder: 'eg: Acme Corporation',
        description: 'If you are acting on behalf of a limited partnership, LLC, or corporation, your legal business name is the name you registered with your state filing office.',
        required: true,
      },
    },    
    {
      key: 'identity.dbaName',
      type: 'input',
      templateOptions: {
        label: 'Doing Business As',
        placeholder: 'eg: Acme Corporation',
        description: 'Doing business as is the commonly used other name, such as a franchise, licensee name, or acronym. Leave blank if not applicable.',
        required: false,
      },
    },
    {
      key: 'identity.physicalAddress',
      wrappers: ['label', 'description'],
      templateOptions: {
        label: 'Physical Address',
        description: 'Your physical address is the street address of the primary office or other building where your entity is located. A post office box or virtual office may not be used as your physical address.',
        required: true,
      },
      fieldGroup: [
        {
          key: 'country',
          type: 'select',
          templateOptions: {
            label: 'Country',
            required: true,
            options: [
              { label: 'United States', value: 'usa' },
              { label: 'Antigua', value: 'ant' },
              { label: 'Belgium', value: 'bel' },
              { label: 'Brazil', value: 'brz' },
              { label: 'Chile', value: 'chl' },
              { label: 'Democratic Republic of Congo', value: 'drc' },
            ],
          },
        },
        {
          key: 'zipCode',
          type: 'input',
          templateOptions: {
            label: 'Zip Code',
            required: true,
          },
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
