import { FormlyFieldConfig } from '@ngx-formly/core';
export const fieldsList = [
    {
        FormlyFields: [
            {
                key: 'title',
                type: 'text',
                wrappers: ['filter'],
                templateOptions: {
                    name: 'typeofassistance',
                    label: 'Opportunity Title',
                    id: 'type-of-assistance'
                }
            },
            {
                key: 'dateModel',
                type: 'date',
                wrappers: ['filter'],
                templateOptions: {
                    name: 'date',
                    label: 'Created Date',
                    id: 'date-modified'
                }
            },

        ], domain : 'contractopportunities'
    },
    {
        FormlyFields: [
            {
                key: 'status',
                type: 'checkbox',
                wrappers: ['filter'],
                templateOptions: {
                  name: 'checkbox',
                  label: 'Status',
                  id: 'checkbox',
                  options: [
                    { value: 'published', label: 'Published', name: 'published' },
                    { value: 'draft', label: 'Draft', name: 'draft' },
                    { value: 'readyForReview', label: 'Ready For Review', name: 'readyForReview' },
                    { value: 'cancelled', label: 'Cancelled', name: 'cancelled' },
                    { value: 'inactive', label: 'Inactive', name: 'inactive' },
                  ]
                }
              },
              {
                key: 'fhInputText',
                type: 'text',
                wrappers: ['filter'],
                templateOptions: {
                  label: 'Agency',
                  id: 'agency',
                  name: 'agency'
                }
              },

        ], domain : 'contractdata'
    }];

export const modelList = [
    {
        model: {
            title: null,
            dateModel: null
        }, domain: 'contractopportunities'
    },
    {
        model: {
            status: [],
            fhInputText: null
        }, domain: 'contractdata'
    }
];
