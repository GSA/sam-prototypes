import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavigationLink, NavigationMode, SelectionPanelModel } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface FormlyStep {
  id: string;
  label: string,
  fieldConfig: FormlyFieldConfig[],
  options?: FormlyFormOptions, // Each step gets it's own options by default if not provided to determine whether to show error or not
  model?: any,
  steps?: FormlyStep[],
}

export interface DataEntryModel {
  stepIndex?: number,
  validityMap?: any,
  steps: FormlyStep[]
}

@Component({
  selector: 'app-data-entry-multi-form',
  templateUrl: './data-entry-multi-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataEntryMultiFormComponent implements OnInit {

  @Input() dataEntryForm: DataEntryModel;

  @Input() model: any = {};

  @Input() currentStepId: string;

  @Input() stepValidityMap: any = {};

  @Output() saveData = new EventEmitter<{model: any, metadata: any}>();

  fields: FormlyFieldConfig[];

  _selectionPanelModel: SelectionPanelModel;
  _currentStep: FormlyStep;
  _currentStepIndex: number;
  
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this._selectionPanelModel = this._buildSidenavModel(this.dataEntryForm);
    this._currentStepIndex = this.dataEntryForm.stepIndex ? this.dataEntryForm.stepIndex : 0
    this._currentStep = this.dataEntryForm.steps[this._currentStepIndex];
    this.fields = this._currentStep.fieldConfig;

    if (!this._currentStep.options) {
      this._currentStep.options = {
        showError: () => false
      }
    }

    if (this.dataEntryForm.validityMap) {
      this._selectionPanelModel.navigationLinks.forEach(navLink => {
        const isValid = this.dataEntryForm.validityMap[navLink.id];
        if (isValid === true || isValid === false) {
          this.updateSidenavValidIndicator(navLink, isValid);
        }
      });
    }
  }

  onReviewAndSubmit() {
    console.log('Review and Submit');
  }

  onPanelChange($event: NavigationLink) {
    this._currentStepIndex = this.dataEntryForm.steps.findIndex(step => step.id === $event.id);
    this._currentStep = this.dataEntryForm.steps[this._currentStepIndex];
    this.fields = this._currentStep.fieldConfig;
    if (!this._currentStep.options) {
      this._currentStep.options = {};
      this._currentStep.options.showError = () => false;
    }
  }

  getBacklabel(): string {
    return this._currentStepIndex !== 0
      ? "Back to </br>" + this.dataEntryForm.steps[this._currentStepIndex - 1].label
      : " Back ";
  }
  getNextlabel(): string {
    return !(this.dataEntryForm.steps.length === this._currentStepIndex + 1)
      ? "Go to </br>" + this.dataEntryForm.steps[this._currentStepIndex + 1].label
      : "Next";
  }

  closeback() {
    this.location.back();
  }

  onSaveClicked() {
    this._currentStep.options.showError = (field) => !field.formControl.valid;

    const isValid = this.fields[0].formControl.valid;
    const currentNavLink = this._selectionPanelModel.navigationLinks[this._currentStepIndex];
    this.updateSidenavValidIndicator(currentNavLink, isValid);

    this.dataEntryForm.validityMap[this._currentStep.id] = isValid;
    this.saveData.emit({
      model: this.model,
      metadata: {
        stepId: this._currentStep.id,
        validityMap: this.dataEntryForm.validityMap
      }
    });
  }

  private updateSidenavValidIndicator(navLink: NavigationLink, isValid: boolean) {
    const text = this.dataEntryForm.steps.find(step => step.id === navLink.id).label;

    if (isValid) {
      navLink.text = text + '-VALID'
    } else {
      navLink.text = text + '-INVALID'
    }
  }

  private _buildSidenavModel(dataEntryForm: DataEntryModel) {
    let sidenavModel: SelectionPanelModel = {
      selectionMode: "SELECTION",
      navigationLinks: []
    };

    if (!dataEntryForm) {
      return sidenavModel;
    }

    dataEntryForm.steps.forEach(step => {
      const navigationLink: NavigationLink = this._getNavigationLink(step);
      sidenavModel.navigationLinks.push(navigationLink);
    });

    return sidenavModel;
  }

  private _getNavigationLink(step: FormlyStep) {
    if (!step.steps) {
      return {
        mode: NavigationMode.INTERNAL,
        id: step.id,
        text: step.label,
        route: null,
      }
    }

    const children = [];
    step.steps.forEach(step => {
      children.push(this._getNavigationLink(step));
    });

    return {
      mode: NavigationMode.INTERNAL,
      id: step.id,
      text: step.label,
      route: null,
      children,
    }
  }
}
