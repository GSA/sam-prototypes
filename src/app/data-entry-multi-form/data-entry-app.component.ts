import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NavigationLink, NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { GlobalConfig, ToastrService } from "ngx-toastr";
import { FormlyUtilsService } from "../app-layout/formly/formly-utils.service";
import { DataEntryMultiFormStepsService } from "./data-entry-multi-form-steps.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: `app-data-entry-multi`,
  templateUrl: './data-entry-app.component.html',
})
export class DataEntryAppComponent implements OnInit, OnDestroy {
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
  options: GlobalConfig;
  subpages: NavigationLink[] = [
    { text: 'Edit', id: 'edit', route: 'form', queryParams: {}, mode: NavigationMode.INTERNAL, selected: true },
    { text: 'Review', id: 'review', route: 'review', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
    { text: 'Preview', id: 'preview', route: 'preview', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false }
  ];



  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    const data = {
      model: this.model,
      metadata: {
        stepId: this.currentStepId,
        stepValidityMap: this.stepValidityMap
      }
    }
    this.onSaveClicked(data);
  }
  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    public router: Router
  ) {
    this.options = this.toastr.toastrConfig;
    this.options.iconClasses = {
      error: 'sds-toast--error',
      info: 'sds-toast--info',
      success: 'sds-toast--success',
      warning: 'sds-toast--warning',
    };
    this.options.closeButton = true;

  }
  goto() {
    // window.open('http://www.goggle.com/')
    this.router.navigate(['/search']);
  }
  ngOnInit() {
    this.loadInitialSteps();
  }

  loadInitialSteps() {
    const savedDraft: string = sessionStorage.getItem('dataEntry');
    if (!savedDraft) {
      return;
    }
    this.getFormDataFromDraft(savedDraft);
  }


  ngOnDestroy() {
    const data = {
      model: this.model,
      metadata: {
        stepId: this.currentStepId,
        stepValidityMap: this.stepValidityMap
      }
    }

    this.onSaveClicked(data);
  }

  onSaveClicked($event: { model: any, metadata: any }) {
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
    this.showSuccessSaveToaster()
  }

  showSuccessSaveToaster() {
    this.toastr.success('Saved successfully', "Data entry");
  }

  onStepChange($event) {
    this.currentStepId = $event.id;
    if (this.currentStepId === 'reviewId') {
      this.reviewFields = this.onReviewAndSubmit();
    } else if (this.isReviewStep) {
      this.onStepEdit();
    }
    this.cdr.detectChanges();
  }

  onStepEdit() {
    this.isReviewStep = false;
    this.reviewFields.forEach(element => {
      if (element.type == 'readonlyrepeat') {
        element.type = 'repeat';
      }
    });
    FormlyUtilsService.setReadonlyMode(false, this.reviewFields, this.model);
    this.subpages.forEach(element => {
      if (element.id == 'edit') {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }

  onReviewAndSubmit() {
    this.isReviewStep = true;
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

        if (element.fieldConfig.type == 'repeat') {
          element.fieldConfig.type = 'readonlyrepeat';
        }

        if (element.fieldConfig) {
          reviewFields.push(element.fieldConfig);
        }
      }
    });
    FormlyUtilsService.setReadonlyMode(true, reviewFields, this.model);
    this.subpages.forEach(element => {
      if (element.id == 'review') {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
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

  onSubPageEventClick(pageName) {
    if (pageName == "review") {
      this.currentStepId = 'reviewId';
      this.isReviewStep = true;
      this.reviewFields = this.onReviewAndSubmit();
      this.cdr.detectChanges();
    } else if (pageName == "edit") {
      this.loadInitialSteps();
    } else if (pageName == "preview") {
      this.router.navigate(["/search"]);
    }
  }
}