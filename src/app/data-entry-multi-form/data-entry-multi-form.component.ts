import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface FormlyStep {
  id: string;
  label: string,
  fieldConfig: FormlyFieldConfig[],
  options?: FormlyFormOptions, // Each step gets it's own options by default if not provided to determine whether to show error or not
  model?: any,
  steps?: FormlyStep[],
  valid?: boolean;
  hideFn?: (model, field) => boolean,
}
@Component({
  selector: 'app-data-entry-multi-form',
  templateUrl: './data-entry-multi-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEntryMultiFormComponent implements OnInit {

  @ViewChild('scrollAnchor') scrollAnchor: ElementRef<HTMLDivElement>;

  @Input() steps: FormlyStep[];

  @Input() model: any = {};

  @Input() currentStepId: string;

  @Input() stepValidityMap: any = {};

  @Output() saveData = new EventEmitter<{ model: any, metadata: any }>();

  @Output() stepChange = new EventEmitter<FormlyStep>();

  fields: FormlyFieldConfig[];

  _currentStep: FormlyStep;
  _currentStepIndex: number;
  _dataEntryStepsDef: FormlyStep[] = [];

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    this._dataEntryStepsDef = this.getFlatSteps(this.steps);

    this._currentStepIndex = 0;
    this._currentStep = this._dataEntryStepsDef[this._currentStepIndex];

    if (this.currentStepId) {
      this._currentStepIndex = this._dataEntryStepsDef.findIndex(step => step.id === this.currentStepId);
      this._currentStep = this._dataEntryStepsDef[this._currentStepIndex];
    }

    this.fields = this._currentStep.fieldConfig;
    if (!this._currentStep.options) {
      this._currentStep.options = {};
      this._currentStep.options.showError = () => false;
    }

    if (this.stepValidityMap) {
      this.updateValidity(this.stepValidityMap, this.steps);
    } else {
      this.stepValidityMap = {};
    }
  }

  onReviewAndSubmit() {
    console.log('Review and Submit');
  }

  getFlatSteps(steps: FormlyStep[]): FormlyStep[] {
    let flat: FormlyStep[] = [];
    steps.forEach(step => {
      if (!step.hideFn || !!step.hideFn(step.model ? step.model : this.model, step.fieldConfig)) {
        flat.push(step);
      }

      if (step.steps && step.steps.length) {
        const childSteps = this.getFlatSteps(step.steps);
        flat = flat.concat(childSteps);
      }
    });

    return flat;
  }

  changeStep(step: FormlyStep) {
    this._currentStep = step;
    this._currentStepIndex = this._dataEntryStepsDef.findIndex(step => step.id === this._currentStep.id);
    this.currentStepId = this._currentStep.id;
    this.fields = this._currentStep.fieldConfig;
    if (!this._currentStep.options) {
      this._currentStep.options = {};
      this._currentStep.options.showError = () => false;
    }

    this.stepChange.emit(this._currentStep);
  }

  onNextStep() {
    this._currentStepIndex++;
    const nextStep = this._dataEntryStepsDef[this._currentStepIndex];
    this.changeStep(nextStep);
  }

  onPreviousStep() {
    this._currentStepIndex--;
    const nextStep = this._dataEntryStepsDef[this._currentStepIndex];
    this.changeStep(nextStep);
  }

  closeback() {
    this.location.back();
  }

  onSaveClicked() {
    this._currentStep.options.showError = (field) => !field.formControl.valid;

    const isValid = this.fields[0].formControl.valid;
    this._currentStep.valid = isValid;
    this.stepValidityMap[this._currentStep.id] = isValid;

    this.scrollAnchor.nativeElement.focus();
    this.saveData.emit({
      model: this.model,
      metadata: {
        stepId: this._currentStep.id,
        stepValidityMap: this.stepValidityMap
      }
    });
  }

  private updateValidity(validityMap: any, steps: FormlyStep[]) {
    steps.forEach(step => {
      step.valid = validityMap[step.label];
      if (step.steps) {
        this.updateValidity(validityMap, step.steps);
      }
    })
  }
}


