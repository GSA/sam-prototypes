import { FormlyFieldConfig } from '@ngx-formly/core';

export const RegistrationFields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword',
        },

      }]
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
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'ueiSAM',
          type: 'input',
          templateOptions: {
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            inputType: 'text',
            inputStyle: 'error',
          },
        },
        {
          key: 'cageCode',
          type: 'input',
          templateOptions: {
            label: 'CAGE/NCAGE',
            placeholder: '',
            inputType: 'text',
          },
        },

        {
          key: 'ueiDUNS',
          type: 'autocomplete',
          templateOptions: {
            label: 'Unique Entity ID (DUNS)',
            // service: this.service,
            // configuration: this.settings,
            // model: this.autocompleteModel,
            // modelChange: this.changes,
          },
        }
        // {
        //   key: 'ueiDUNS',
        //   type: 'input',
        //   templateOptions: {
        //     label: 'Unique Entity ID (DUNS)',
        //     placeholder: '',
        //     inputType: 'text',
        //     inputStyle: 'error',
        //   },
        // }
      ],
    },
    {
      key: 'registration',
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
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        }
      ]
    },
    {
      key: 'expiration',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDate',
          type: 'radio',
          templateOptions: {
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },
              { label: 'None', value: '0' },

            ]
          },
        }
      ]
    }
  ];