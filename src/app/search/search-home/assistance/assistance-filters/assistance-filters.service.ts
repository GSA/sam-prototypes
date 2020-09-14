import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  HierarchyService,
  SearchFiltersWrapperService 
} from '../../../../common/public-apis';

import { FakeAutocompleteService } from '../../fake-autocomplete.service';

import { AssistanceFiltersModule } from './assistance-filters.module';

@Injectable({
  providedIn: AssistanceFiltersModule
})
export class AssistanceFiltersService implements SearchFiltersWrapperService {
  
  keywordService: FakeAutocompleteService = new FakeAutocompleteService();

  constructor(public hierarchyService: HierarchyService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
  {
      key: 'keyword',
      type: 'autocomplete',
      templateOptions: {
          label: 'Keyword',
          hideOptional: true,
          service: this.keywordService,
          configuration: this.keywordService.settings,
          model: this.keywordService.model
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
          key: 'publishDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Published Date',
            hideOptional: true
          }
        },
        {
          key: 'updateDate',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Last Updated Date',
            hideOptional: true
          }
        }
      ]
    },
    {
      key: 'hierarchy',
      type: 'autocomplete',
      templateOptions: {
        label: 'Federal Organizations',
        group: 'accordion',
        expand: false,
        service: this.hierarchyService,
        configuration: this.hierarchyService.settings,
        model: this.hierarchyService.model
      }
   },
    {
      key: 'eligibility',
      templateOptions: {
        label: 'Eligibility',
        group: 'accordion',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'recipient',
          type: 'input',
          templateOptions: {
            label: 'Recipient Eligibility',
            hideOptional: true
          }
        },
        {
          key: 'beneficiary',
          type: 'input',
          templateOptions: {
            label: 'Beneficiary Eligibility',
            hideOptional: true
          }
        }
      ]
   },
   {
      key: 'assistanceType',
      type: 'input',
      templateOptions: {
        label: 'Assistance Type',
        group: 'accordion',
        expand: false
      }
   },
    {
      key: 'zipCode',
      type: 'input',
      templateOptions: {
        label: 'Location Zip Code',
        group: 'accordion',
        expand: false
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
          {
            value: 'Active',
            label: 'Active'
          },
          {
            value: 'Inactive',
            label: 'Inactive'
          }
        ]
      }
   }
  ];

  public oldfilters: FormlyFieldConfig[] = [
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
}

