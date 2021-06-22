import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
      [closeUrl]="closeUrl"
      [model]="model"
      (saveData)="onSaveClicked($event)"
      (stepChange)="onStepChange($event)"
    ></app-data-entry-multi-form>
  `,
})
export class DataEntryAppComponent implements OnInit {
  steps: FormlyStep[] = [
    {
      id: 'step1',
      text: 'Step 1',
      route: '/dataentry-multiform',
      mode: NavigationMode.LABEL,
      children: [
        {
          id: 'step1Child1',
          text: 'Review Contract',
          fieldConfig: this.dataEntryFieldService.getReviewContract('step1Child1'),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        },
        {
          id: 'step1Child2',
          text: 'Child Sub awardee modal',
          fieldConfig: this.dataEntryFieldService.getSubawardeefields('step1Child2'),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        },
        {
          id: 'step1Child3',
          text: 'Child report details',
          fieldConfig: this.dataEntryFieldService.getReportDetails('step1Child3'),
          route: '/dataentry-multiform',
          mode: NavigationMode.INTERNAL,
        }
      ]
    },
    {
      id: 'step2Id',
      text: 'Report Details',
      fieldConfig: this.dataEntryFieldService.getReportDetails('step2'),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'step3Id',
      text: 'Subawardee Data',
      fieldConfig: this.dataEntryFieldService.getSubawardeeData('step3'),
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    },

    {
      id: 'review',
      text: 'Review and Submit',
      isReview: true,
      route: '/dataentry-multiform',
      mode: NavigationMode.INTERNAL,
    }
  ];

  closeUrl = 'http://localhost:4200/#'

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
    console.log($event, 'moe');
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
  }

  onStepChange($event: FormlyStep) {
    this.currentStepId = $event.id;
    console.log(this.model);
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }


}