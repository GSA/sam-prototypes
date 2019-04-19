import { FormlyFieldConfig } from '@ngx-formly/core';
export const fields: FormlyFieldConfig[] = [
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

];

export const model = {
  type: null,
  dateModel: null,
  status: [],
  title: null
};
