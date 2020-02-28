import { FormlyFieldConfig } from '@ngx-formly/core';
import { SearchListConfiguration } from '@gsa-sam/layouts';

export let entityInfoListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Name (A - Z)", value: "nameAscending" },
      { text: "Name (Z - A)", value: "nameDescending" },
    ]
};

export let registrationListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Expiration Date", value: "dateDescending" },
      { text: "Entity Name (A - Z)", value: "nameAscending" },
      { text: "Entity Name (Z - A)", value: "nameDescending" },
      { text: "Unique Entity ID (Low - High)", value: "ueiAscending" },
      { text: "Unique Entity ID (High - Low)", value: "ueiDescending" }
    ]
};

export let exclusionListConfig: SearchListConfiguration = {
  defaultSortValue: "relevanceDescending",
  pageSize: 25,
  sortList:
    [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Termination Date", value: "dateDescending" },
      { text: "Name (A - Z)", value: "nameAscending" },
      { text: "Name (Z - A)", value: "nameDescending" }
    ]
};

export let entityInfoFilters: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Keyword' },
    type: 'input'
  },
  {
      key: 'entityWrapper',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity or Excluded Party' },
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
    }
];

export let registrationFilters: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Keyword' },
    type: 'input'
  },
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

export let disasterResponseFilters: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Keyword' },
    type: 'input'
  },
  {
      key: 'entityWrapper',
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
    key: 'locationWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Location' },
	    fieldGroup: [{
	      key: 'country',
	      type: 'input',
	      templateOptions: {
	        label: 'Country'
	      }
	    },{
	      key: 'zipCode',
	      type: 'input',
	      templateOptions: {
	        label: 'Zip Code'
	      }
	    },{
	      key: 'state',
	      type: 'input',
	      templateOptions: {
	        label: 'State/Province'
	      }
	    },
	      {
	      key: 'city',
	      type: 'input',
	      templateOptions: {
	        label: 'City'
	      }
	    }]
    },
    {
    key: 'statusWrapper',
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

export let exclusionFilters: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Keyword' },
    type: 'input'
  },
  {
    key: 'keyword',
    wrappers: ['filterwrapper'],
    templateOptions: { label: 'Classification' },
    type: 'input'
  },
  {
      key: 'entityWrapper',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Excluded Party' },
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
      ]
    },
    {
      key: 'einWrapper',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Employer Identification Number' },
      fieldGroup: [
        {
        	key: 'ssntin',
        	type: 'input',
        	templateOptions: {
        		type: 'text',
        		label: 'SSN / TIN',
        	}
        },
        {
        	key: 'name',
        	type: 'input',
        	templateOptions: {
        		type: 'text',
        		label: 'Name',
        	}
        }
      ]
    },
    {
    key: 'locationWrapper',
	    wrappers: ['accordionwrapper'],
	    templateOptions: { label: 'Location' },
	    fieldGroup: [{
	      key: 'country',
	      type: 'input',
	      templateOptions: {
	        label: 'Country'
	      }
	    },{
	      key: 'zipCode',
	      type: 'input',
	      templateOptions: {
	        label: 'Zip Code'
	      }
	    },{
	      key: 'state',
	      type: 'input',
	      templateOptions: {
	        label: 'State/Province'
	      }
	    },{
	      key: 'city',
	      type: 'input',
	      templateOptions: {
	        label: 'City'
	      }
	    }]
    },
    {
    key: 'statusWrapper',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Status' },
    fieldGroup: [
      {
        key: 'exclusionStatus',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'Active',
              value: 'Active'
            },
            {
              key: 'Terminated',
              value: 'Terminated'
            }
          ]
        }
      }
    ]
  }
];