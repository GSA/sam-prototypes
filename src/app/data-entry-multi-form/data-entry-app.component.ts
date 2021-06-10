import { Component, OnInit } from "@angular/core";
import { DataEntryMultiFormStepsService } from "./data-entry-multi-form-steps.service";
import { DataEntryModel } from "./data-entry-multi-form.component";


@Component({
  selector: `app-data-entry-multi`,
  template: `
    <app-data-entry-multi-form
      [dataEntryForm]="dataEntryForm"
      [model]="model"
      (saveData)="onSaveClicked($event)"
    ></app-data-entry-multi-form>
  `,
})
export class DataEntryAppComponent implements OnInit {
  dataEntryForm: DataEntryModel = {
    stepIndex: 0,
    validityMap: {},
    steps: [
      {
        id: 'step1Id',
        label: 'Review Contract',
        fieldConfig: this.dataEntryFieldService.getReviewContract(),
        steps: [
          {
            id: 'stepChild1',
            label: 'Child Sub awardee modal',
            fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          },
          {
            id: 'stepChild2',
            label: 'Child report details',
            fieldConfig: this.dataEntryFieldService.getReportDetails(),
          }
        ]
      },
      {
        id: 'step2Id',
        label: 'Report Details',
        fieldConfig: this.dataEntryFieldService.getReportDetails(),
      },
      {
        id: 'step3Id',
        label: 'Subawardee Data',
        fieldConfig: this.dataEntryFieldService.getSubawardeeData(),
        steps: [
          {
            id: 'stepChild3',
            label: 'Third Sub awardee modal',
            fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          },
          {
            id: 'stepChild4',
            label: 'Third Child report details',
            fieldConfig: this.dataEntryFieldService.getReportDetails(),
          }
        ]
      },
      {
        id: 'step4Id',
        label: 'Second Report Details',
        fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details2'),
      },
      {
        id: 'step5Id',
        label: 'Third Report Details',
        fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details3'),
      },
      {
        id: 'step6Id',
        label: 'Fourth Report Details',
        fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details4'),
      }
    ]
  };

  model: any = {};

  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService
  ) { }

  ngOnInit() {
    const savedDraft: string = sessionStorage.getItem('dataEntry');

    if (!savedDraft) {
      return;
    }

    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.dataEntryForm.stepIndex = savedDraftModel?.metadata?.stepIndex || 0;
    this.dataEntryForm.validityMap = savedDraftModel?.metadata?.validityMap || {};
  }

  onSaveClicked($event: { model: any, metadata: any }) {
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
  }


}