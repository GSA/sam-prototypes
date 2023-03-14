import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'survey-question-two',
  templateUrl: './survey-question-two.component.html'
})
export class SurveyQuestionTwoComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    survey: {
      requiredBy: ''
    }
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'survey.requiredBy',
      type: 'radio',

      templateOptions: {
        required: true,
        options: [
          {
            key: 'federal',
            value: 'Federal government',
          },
          {
            key: 'business',
            value:
              'Another company or business',
          },
          {
            key: 'healthcare',
            value: 'Hospital system or health care organization',
          },
          {
            key: 'industrygroup',
            value: 'Industry association or publication',
          },
          {
            key: 'non-profit',
            value: 'Non-profit organization',
          },
          {
            key: 'PTAC',
            value: 'Procurement Technical Assistance Center (PTAC)',
          },
          {
            key: 'tribalnation',
            value: 'Tribal government',
          },
          {
            key: 'school',
            value: 'University or research facility',
          },
          {
            key: 'state',
            value: 'U.S. state or territory government',
          },
          {
            key: 'other',
            value: 'Other',
          }
        ],
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
