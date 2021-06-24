import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyUtilsService } from "../app-layout/formly/formly-utils.service";
import { DataEntryMultiFormStepsService } from "./data-entry-multi-form-steps.service";


@Component({
  selector: `app-data-entry-multi`,
  templateUrl: './data-entry-app.component.html',
})
export class DataEntryAppComponent implements OnInit {
  @ViewChild('myTemplate') myTemplate: TemplateRef<any>;

  steps = [
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

    // {
    //   id: 'review',
    //   text: 'Review and Submit',
    //   isReview: true,
    //   route: '/dataentry-multiform',
    //   mode: NavigationMode.INTERNAL,
    // }
  ];

  closeUrl = '';

  model: any = {};
  currentStepId: string;
  stepValidityMap: any;
  reviewFields: FormlyFieldConfig[];
  isReviewStep = false;
  navigationMode = NavigationMode;
  
  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService,
    private cdr: ChangeDetectorRef,
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

  onStepChange($event) {
    this.currentStepId = $event.id;
    if (this.currentStepId === 'reviewId') {
      this.isReviewStep = true;
      this.reviewFields = this.onReviewAndSubmit();
    } else if (this.isReviewStep) {
      this.isReviewStep = false;
      FormlyUtilsService.setReadonlyMode(false, this.reviewFields, this.model);
    }

    this.cdr.detectChanges();
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }

  onReviewAndSubmit() {
    let _reviewFields = this.getFlatSteps(this.steps);
    let reviewFields = []

    let prvAlert = {
      key: "customTemplate",
      type: 'custom',
      templateOptions: {
        customResultsTemplate: this.myTemplate
      }
    }

    reviewFields.push(prvAlert);

    _reviewFields.forEach(element => {
      if (!element.isReview) {
        reviewFields.push({
          key: element.id + '_review',
          template: '<h2 class="padding-top-2"> ' + element.text + ' </h2><hr />',
        });

        if (element.type == 'repeat') {
          element.type = 'readonlyrepeat';
        }

        if (element.fieldConfig) {
          reviewFields.push(element.fieldConfig);
        }
      }
    });
    FormlyUtilsService.setReadonlyMode(true, reviewFields, this.model);

    return reviewFields;
  }

  getFlatSteps(steps: any[]): any[] {
    let flat: any[] = [];
    steps.forEach(step => {
        if (step.hideFn && step.hideFn(step.model ? step.model : this.model, step.fieldConfig)) {
          step.hide = true;
          return;
        }
        step.hide = false;
        if (step.mode !== NavigationMode.LABEL) {
          flat.push(step);
        }

      if (step.children && step.children.length) {
        const childSteps = this.getFlatSteps(step.children);
        flat = flat.concat(childSteps);
      }
    });

    return flat;
  }


}