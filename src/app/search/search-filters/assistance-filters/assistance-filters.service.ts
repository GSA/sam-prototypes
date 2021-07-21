import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AssistanceFiltersModule } from './assistance-filters.module';

import { 
  HierarchyService,
  SearchFiltersWrapperService 
} from '../../../common/public-apis';
import { keywordFilter } from '../common/keywordfilter';


@Injectable({
  providedIn: AssistanceFiltersModule
})
export class AssistanceFiltersService implements SearchFiltersWrapperService {

  constructor(public hierarchyService: HierarchyService) { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
    keywordFilter,
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
}

