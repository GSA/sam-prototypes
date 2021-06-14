import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import _ from "lodash-es";
import { FormlyUtilsService } from '../app-layout/formly/formly-utils.service';

export interface FormlyStep extends INavigationLink, Selectable {
  fieldConfig: FormlyFieldConfig[],
  options?: FormlyFormOptions, // Each step gets it's own options by default if not provided to determine whether to show error or not
  model?: any,
  children?: FormlyStep[],
  valid?: boolean;
  hideFn?: (model: any, fields?: FormlyFieldConfig[]) => boolean,
  hide?: boolean,
  isReview?: boolean
}

@Component({
  selector: 'app-data-entry-multi-form',
  templateUrl: './data-entry-multi-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEntryMultiFormComponent implements OnInit, OnChanges {

  @Input() steps: FormlyStep[];

  @Input() model: any = {};

  @Input() currentStepId: string;

  @Input() stepValidityMap: any = {};

  @Output() saveData = new EventEmitter<{ model: any, metadata: any }>();

  @Output() stepChange = new EventEmitter<FormlyStep>();

  @Output() modelChange = new EventEmitter<any>();

  fields: FormlyFieldConfig[];

  navigationMode = NavigationMode;

  _currentStep: FormlyStep;
  _currentStepIndex: number;
  _dataEntryStepsDef: FormlyStep[] = [];

  _isReviewAndSubmitDisabled = true;

  reviewFields: FormlyFieldConfig[] = [];
  isReviewMode: boolean = false;
  @ViewChild('myTemplate') myTemplate: TemplateRef<any>;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._currentStep) {
      return;
    }

    if (changes.currentStepId && this._currentStep.id != changes.currentStepId.currentValue) {
      this.changeStep(changes.currentStepId.currentValue);
    }
  }

  ngOnInit(): void {
    this._dataEntryStepsDef = this.getFlatSteps(this.steps);

    this._currentStepIndex = 0;
    this._currentStep = this._dataEntryStepsDef[this._currentStepIndex];

    if (this.activatedRoute.snapshot.queryParams.sdsStepId) {
      this.currentStepId = this.activatedRoute.snapshot.queryParams.sdsStepId;
    } else if (!this.currentStepId) {
      this.currentStepId = this._dataEntryStepsDef[0].id;
    }

    this.changeStep(this.currentStepId);

    if (this.stepValidityMap) {
      this.updateValidity(this.stepValidityMap, this.steps);
      this.checkReviewAndSubmit();
    } else {
      this.stepValidityMap = {};
    }

    this.activatedRoute.queryParams.subscribe(queryParam => {
      if (queryParam.sdsStepId && queryParam.sdsStepId != this.currentStepId) {
        this.changeStep(queryParam.sdsStepId);
      }
    })
  }

  onReviewAndSubmit() {
    console.log('Review and Submit');
    let _reviewFields = [];
    this.isReviewMode = true;

    let prvAlert = {
      key: "customTemplate",
      type: 'custom',
      templateOptions: {
        customResultsTemplate: this.myTemplate
      }
    }

    this.reviewFields = [];
    _reviewFields = _.cloneDeep(this._dataEntryStepsDef);

    this.reviewFields.push(prvAlert);

    _reviewFields.forEach(element => {
      if (!element.isReview) {
        this.reviewFields.push({
          key: element.id,
          template: '<h2 class="padding-top-2"> ' + element.label + ' </h2><hr />',
        });
        element.fieldConfig.forEach(chdElement => {
          if (chdElement.fieldGroup) {
            chdElement.fieldGroup.forEach(chdfieldGroup => {
              this.reviewFields.push(chdfieldGroup);
            });
          } else {
            this.reviewFields.push(chdElement);
          }
        });
      }
    });

    FormlyUtilsService.setReadonlyMode(true, this.reviewFields, this.model);

    // return this.reviewFields;
  }

  getFlatSteps(steps: FormlyStep[]): FormlyStep[] {
    let flat: FormlyStep[] = [];
    steps.forEach(step => {
      if (step.hideFn && step.hideFn(step.model ? step.model : this.model, step.fieldConfig)) {
        step.hide = true;
        return;
      }
      step.hide = false;
      flat.push(step);

      if (step.children && step.children.length) {
        const childSteps = this.getFlatSteps(step.children);
        flat = flat.concat(childSteps);
      }
    });

    return flat;
  }

  /**
   * Change currently selected step
   * @param stepId - The id of step to change to
   * @param incrementor - Optional input - Either a 1 or -1. When a value of 1
   *  is provided, then the step to change to will be the next step from the input step
   *  given. When a value of -1 is provided, then the selected step will be the step
   *  previous to the provided step
   */
  changeStep(stepId: string, incrementor?: 1 | -1) {
    // Update current step's validity before moving to next step
    if (this.fields) {
      const isValid = this.fields[0].formControl.valid;
      this._currentStep.valid = isValid;
      this.stepValidityMap[this._currentStep.id] = isValid;
    }
    this.isReviewMode = false;

    this._dataEntryStepsDef = this.getFlatSteps(this.steps);
    let stepIndex = this._dataEntryStepsDef.findIndex(step => step.id === stepId);
    if (incrementor) {
      stepIndex = stepIndex + incrementor;
    }
    this._currentStepIndex = stepIndex;
    this._currentStep = this._dataEntryStepsDef[stepIndex];

    this.currentStepId = this._currentStep.id;
    if (this._currentStep.isReview) {
      this.onReviewAndSubmit()
      this.fields = _.cloneDeep(this.reviewFields)
    } else {
      this.fields = this._currentStep.fieldConfig;
    }

    if (!this._currentStep.options) {
      this._currentStep.options = {};
      this._currentStep.options.showError = () => false;
    }

    if (this._currentStep.mode === NavigationMode.INTERNAL) {
      this.router.navigate(this._currentStep.route ? [this._currentStep.route] : [], {queryParams: {
        sdsStepId: this.currentStepId
      }});
    }

    this.stepChange.emit(this._currentStep);
  }

  onNextStep() {
    this.changeStep(this._currentStep.id, 1);
  }

  onPreviousStep() {
    this.changeStep(this._currentStep.id, -1);
  }

  closeback() {
    this.location.back();
  }

  onSaveClicked() {
    this._dataEntryStepsDef = this.getFlatSteps(this.steps);
    this._currentStepIndex = this._dataEntryStepsDef.findIndex(step => step.id === this._currentStep.id);
    this._currentStep.options.showError = (field) => !field.formControl.valid;

    const isValid = this.fields[0].formControl.valid;
    this._currentStep.valid = isValid;
    this.stepValidityMap[this._currentStep.id] = isValid;
    this.checkReviewAndSubmit();
    this.saveData.emit({
      model: this.model,
      metadata: {
        stepId: this._currentStep.id,
        stepValidityMap: this.stepValidityMap
      }
    });
  }

  getDisplayedSteps(steps: FormlyStep[]) {
    if (!steps) {
      return [];
    }
    return steps.filter((step => !step.hide));
  }
  gotoSubmit() {
    console.log(this.model, 'submits')
  }

  private checkReviewAndSubmit() {
    this._isReviewAndSubmitDisabled = this._dataEntryStepsDef.some(step => !step.valid);
  }

  private updateValidity(validityMap: any, steps: FormlyStep[]) {
    steps.forEach(step => {
      step.valid = validityMap[step.id];
      if (step.children) {
        this.updateValidity(validityMap, step.children);
      }
    })
  }
}