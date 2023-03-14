import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'survey-question-foreign',
  templateUrl: './survey-question-foreign.component.html'
})
export class SurveyQuestionForeignComponent implements OnInit {
  
    form = new FormGroup({});
  model: any = {
    survey: {
      requiredBy: ''
    }
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'survey.dod',
      type: 'radio',

      templateOptions: {
        required: true,
        options: [
          {
            key: 'no',
            value: 'No',
          },
          {
            key: 'yes',
            value: 'Yes',
          }
        ],
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
