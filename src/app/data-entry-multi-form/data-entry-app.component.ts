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
      }
    ]
  };

  model: any = {};

  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService
  ) {}

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

  onSaveClicked($event: {model: any, metadata: any}) {
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
  }


}