import { Component, OnInit } from "@angular/core";
import { DataEntryMultiFormStepsService } from "./data-entry-multi-form-steps.service";
import { FormlyStep } from "./data-entry-multi-form.component";


@Component({
  selector: `app-data-entry-multi`,
  template: `
    <app-data-entry-multi-form
      [steps]="steps"
      [currentStepId]="currentStepId"
      [stepValidityMap]="stepValidityMap"
      [model]="model"
      (saveData)="onSaveClicked($event)"
      (stepChange)="onStepChange($event)"
    ></app-data-entry-multi-form>
  `,
})
export class DataEntryAppComponent implements OnInit {
    steps: FormlyStep[] = [
      {
        id: 'step1Id',
        label: 'Review Contract',
        fieldConfig: this.dataEntryFieldService.getReviewContract(),
        steps: [
          {
            id: 'step1Child1',
            label: 'Child Sub awardee modal',
            fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          },
          {
            id: 'step1Child2',
            label: 'Child report details',
            fieldConfig: this.dataEntryFieldService.getReportDetails(),
          }
        ]
      },
      {
        id: 'step2Id',
        label: 'Report Details',
        fieldConfig: this.dataEntryFieldService.getReportDetails(),
        hideFn: (model) => !model?.dataentry?.certificate
      },
      {
        id: 'step3Id',
        label: 'Subawardee Data',
        fieldConfig: this.dataEntryFieldService.getSubawardeeData(),
        steps: [
          {
            id: 'step3Child1',
            label: 'Third Sub awardee modal',
            fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          },
          {
            id: 'step3Child2',
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
    ];

  model: any = {};
  currentStepId: string;
  stepValidityMap: any;

  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService,
  ) { }

  ngOnInit() {

    const savedDraft: string = sessionStorage.getItem('dataEntry');
    if (!savedDraft) {
      return;
    }

    this.getFormDataFromDraft(savedDraft);
  }

  onSaveClicked($event: { model: any, metadata: any }) {
    console.log($event);
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
  }

  onStepChange($event: FormlyStep) {
    this.currentStepId = $event.id;
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }


}