import { Component, OnInit } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
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
      text: 'Review Contract',
      fieldConfig: this.dataEntryFieldService.getReviewContract(),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
      children: [
        {
          id: 'step1Child1',
          text: 'Child Sub awardee modal',
          fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        },
        {
          id: 'step1Child2',
          text: 'Child report details',
          fieldConfig: this.dataEntryFieldService.getReportDetails(),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        }
      ]
    },
    {
      id: 'step2Id',
      text: 'Report Details',
      fieldConfig: this.dataEntryFieldService.getReportDetails(),
      hideFn: (model) => !model?.dataentry?.certificate,
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'step3Id',
      text: 'Subawardee Data',
      fieldConfig: this.dataEntryFieldService.getSubawardeeData(),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
      children: [
        {
          id: 'step3Child1',
          text: 'Third Sub awardee modal',
          fieldConfig: this.dataEntryFieldService.getSubawardeefields(),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        },
        {
          id: 'step3Child2',
          text: 'Third Child report details',
          fieldConfig: this.dataEntryFieldService.getReportDetails(),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        }
      ]
    },
    {
      id: 'step4Id',
      text: 'Second Report Details',
      fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details2'),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'step5Id',
      text: 'Third Report Details',
      fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details3'),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'step6Id',
      text: 'Fourth Report Details',
      fieldConfig: this.dataEntryFieldService.getReportDetails('dataentry.details4'),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'review',
      text: 'Review and Submit',
      fieldConfig: [],
      isReview: true,
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
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
    console.log($event, this.model, 'moe');
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