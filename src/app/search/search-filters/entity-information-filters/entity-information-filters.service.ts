import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EntityInformationFiltersModule } from './entity-information-filters.module';

import {
  SearchFiltersWrapperService 
} from '../../../common/public-apis';
import { keywordFilter } from '../common/keywordfilter';

@Injectable({
  providedIn: EntityInformationFiltersModule
})
export class EntityInformationFiltersService implements SearchFiltersWrapperService {

  constructor() { }
  public model = {};

  public filters: FormlyFieldConfig[] = [
	 keywordFilter,
  {
      key: 'searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity' },
      fieldGroup: [
        {
        	key: 'legalBusinessName',
        	type: 'input',
        	templateOptions: {
        		type: 'text',
        		label: 'Entity Name',
        	}
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          }
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
          }
        },
        {
        	key: 'cageCode',
        	type: 'input',
        	templateOptions: {
        		type: 'text',
        		label: 'CAGE / NCAGE',
        	}
        }
      ],
  },
  {
  	key: 'location',
  	wrappers: ['accordionwrapper'],
  	templateOptions: { label: 'Location ' },
  	fieldGroup: [
  		{
  			key: 'country',
  			type: 'input',
  			templateOptions: {
  				type: 'text',
  				hideOptional: true,
  				label: 'Country',
  			}
  		},
  		{
  			key: 'zipCode',
  			type: 'input',
  			templateOptions: {
  				type: 'text',
  				hideOptional: true,
  				label: 'Zip Code',
  			}
  		},
  		{
  			key: 'state',
  			type: 'input',
  			templateOptions: {
  				type: 'text',
  				hideOptional: true,
  				label: 'State / Province',
  			}
  		},
  		{
  			key: 'city',
  			type: 'input',
  			templateOptions: {
  				type: 'text',
  				hideOptional: true,
  				label: 'City',
  			}
  		},
  		{
  			key: 'congressionalDistrict',
  			type: 'input',
  			templateOptions: {
  				type: 'text',
  				hideOptional: true,
  				label: 'Congressional District',
  			}
  		}
  	]
  },
  {
    key: 'status',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Status' },
    fieldGroup: [
      {
        key: 'registrationStatus',
        type: 'multicheckbox',
        templateOptions: {
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


