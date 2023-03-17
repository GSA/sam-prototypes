import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'survey-question-one',
  templateUrl: './survey-question-one.component.html'
})
export class SurveyQuestionOneComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    survey: {
      goal: ''
    }
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'survey.goal',
      type: 'radio',

      templateOptions: {
        label: 'I want to do business...',
        description: 'Select the option more relevant to you.',
        required: true,
        options: [
          {
            key: 'prime',
            value: 'Directly with the U.S. federal government.',
          },
          {
            key: 'sub',
            value:
              'With a business or other organization which receives funds directly from the U.S. federal government.',
          },
          {
            key: 'other',
            value: 'Other.',
          }
        ],
      },
    },
    {
      key: 'survey.primesubgoal',
      type: 'radio',
      hideExpression: (model) => this.model.survey?.goal !== "prime",
      templateOptions: {
        label: 'Select the answer that best fits your intentions today',
        required: true,
        options: [
          {
            key: 'contracts',
            value: 'Bid on a federal procurement opportunity as a prime contractor.',
          },
          {
            key: 'assistance',
            value:
              'Apply for federal financial assistance.',
          },
          {
            key: 'creditcard',
            value: 'Follow agency instructions related to a federal credit card transaction made to my entity.',
          },
          {
            key: 'browsing',
            value: 'Just browsing.  I don\' have anything specific in mind today, but might be interested in future business directly with the U.S. federal government.',
          },
          {
            key: 'other',
            value: 'Participate in another federal program.  Please tell us the program name.',
          },
        ],
      }
    },
    {
      key: 'survey.subgoal',
      type: 'radio',
      hideExpression: (model) => this.model.survey?.goal !== "sub",
      templateOptions: {
        label: 'Select the answer that best fits your intentions today',
        required: true,
        options: [
          {
            key: 'subcontracts',
            value: 'Provide goods or services as a federal subcontractor.',
          },
          {
            key: 'subgrants',
            value:
              'Receive a suaward under a federal grant/financial assistance program.',
          },
          {
            key: 'subgrantee',
            value: 'Apply as a grantee for federal funds distrubted by a government entity other than the federal government.',
          },
          {
            key: 'browsing',
            value: "Just browsing.  I don't have anything specific in mind today, but might be interested in future business organizations that receive funds direction from the U.S. federal government.",
          },
          {
            key: 'other',
            value: 'Participate in another federal program.  Please tell us the program name.',
          },
        ],
      }
    },
    {
      key: 'survey.othergoal',
      type: 'textarea',
      hideExpression: (model) => this.model.survey?.goal !== "other",
      templateOptions: {
        label: 'Please describe',
        required: true,
        maxLength: 250,
      },
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
