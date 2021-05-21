import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { 
  SearchFiltersWrapperService 
} from '../../../common/public-apis';
import { keywordFilter } from '../common/keywordfilter';

import { IntegrityFiltersModule } from './integrity-filters.module';

@Injectable()
export class IntegrityFiltersService implements SearchFiltersWrapperService {
  
  constructor() { }

  public model = {};

  public filters: FormlyFieldConfig[] = [
    keywordFilter,
    {
      key: 'entity',
      templateOptions: {
        label: 'Entity',
        expand: false,
        hide: true
      },
      fieldGroup: [
        {
          key: 'ueiDuns',
          type: 'input',
          templateOptions: { 
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'number',
            inputStyle: 'error',
            hideOptional: true
          }
        },
        {
          key: 'ueiSam',
          type: 'input',
          templateOptions: { 
            tagText: 'SAM',
            tagClass: 'sds-tag--info-white',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 13,
            max: 13,
            hideOptional: true
          }
        },
        {
          key: 'cageCode',
          type: 'input',
          templateOptions: {
            label: 'CAGE Code',
            hideOptional: true,
          }
        },      
        {
          key: 'entityName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            hideOptional: true,
          }
        }
      ]
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
          key: 'recordDate',
          type: 'select',
          templateOptions: {
            label: 'Report Date',
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
          key: 'terminationDate',
          type: 'select',
          hide: true,
          templateOptions: {
            label: 'Last Updated Date',
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
    },
   {
      key: 'enteredBy',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Entered By',
        group: 'accordion',
        expand: false,
        options: [
          {
            value: 'gov',
            label: 'U.S. Government'
          },
          {
            value: 'vendor',
            label: 'Vendors'
          }
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


