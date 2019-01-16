import { FormlyFieldConfig } from '@ngx-formly/core';

export class ListModel {
    constructor(
    	public title: string, 
		public automaticRefresh: boolean, 
		public filterFields: FormlyFieldConfig[]) 
	{
	}
};

export const SearchModels: Map<string, ListModel> = new Map(
  [
  	['entities', {
		title: 'All Entity Information',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Entities'
				}
			}
		]
  	}], 
  	['registrations', {
		title: 'Entity Registrations',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Registrations'
				}
			}
		]
	}
  ], 
  	['all', {
		title: 'All Data',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search All Data'
				}
			}
		]
	}
  ], 
  	['recovery', {
		title: 'Disaster Recovery Registry',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Registrations'
				}
			}
		]
	}
  ], 
  	['exclusions', {
		title: 'Exclusions',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Registrations'
				}
			}
		]
	}
  ],  
  ['contracting', {
		title: 'All Contracting',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search All Contract Data'
				}
			}
		]
	}
  ], 
  	['assistance', {
		title: 'Assistance Listings',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Listings'
				}
			}
		]
	}
  ], 
  	['hierarchy', {
		title: 'Federal Hierarchy',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Search Hierarchy'
				}
			}
		]
	}
  ], 
  	['wdnumber', {
		title: 'Wage Determinations',
		automaticRefresh: true,
		filterFields: [
			{
				key: 'keywords',
				type: 'input',
				templateOptions: {
					label: 'Keywords',
					placeholder: 'Enter a WD Number'
				}
			}
		]
	}
  ], 
  	['dba-wd', {
		title: 'DBA Wage Determinations',
		automaticRefresh: true,
		filterFields: [
		]
	}
  ], 
  	['sca-wd', {
		title: 'SCA Wage Determinations',
		automaticRefresh: true,
		filterFields: [
		]
	}
  ]
]);