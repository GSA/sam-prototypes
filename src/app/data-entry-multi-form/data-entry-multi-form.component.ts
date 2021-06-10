import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NavigationLink, NavigationMode, SelectionPanelModel } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormlyStep {
  id: string;
  label: string,
  fieldConfig: FormlyFieldConfig[],
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

  @Output() saveData = new EventEmitter<{ model: any, metadata: any }>();

  options: any = {};
  fields: FormlyFieldConfig[];

  _selectionPanelModel: SelectionPanelModel;
  _currentStep = 0;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this._selectionPanelModel = this._buildSidenavModel(this.dataEntryForm);
    this._currentStep = this.dataEntryForm.stepIndex ? this.dataEntryForm.stepIndex : 0;
    this.fields = this.dataEntryForm.steps[this._currentStep].fieldConfig;

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

  getField(id, steps) {
    steps.forEach((step) => {
      if (step.id === id) {
        this.fields = [];
        this.fields = step.fieldConfig;
      } else {
        if (step.steps?.length > 0) {
          this.getField(id, step.steps)
        }
      }
    });

  }
  onPanelChange(id) {
    this.getField(id, this.dataEntryForm.steps)

    // const stepIndex = this.dataEntryForm.steps.findIndex(step => step.id === id);
    // this.fields = this.dataEntryForm.steps[stepIndex].fieldConfig;
    // this._currentStep = stepIndex;
  }

  getBacklabel(): string {
    return this._currentStep !== 0
      ? "Back to </br>" + this.dataEntryForm.steps[this._currentStep - 1].label
      : " Back ";
  }
  getNextlabel(): string {
    return !(this.dataEntryForm.steps.length === this._currentStep + 1)
      ? "Go to </br>" + this.dataEntryForm.steps[this._currentStep + 1].label
      : "Next";
  }

  closeback() {
    this.location.back();
  }

  onSaveClicked() {
    const currentNavLink = this._selectionPanelModel.navigationLinks[this._currentStep];
    const isValid = this.updateFieldsAndGetValidity(this.fields);
    this.updateSidenavValidIndicator(currentNavLink, isValid);

    const step = this.dataEntryForm.steps[this._currentStep];
    this.dataEntryForm.validityMap[step.id] = isValid;
    this.saveData.emit({
      model: this.model,
      metadata: {
        stepIndex: this._currentStep,
        validityMap: this.dataEntryForm.validityMap
      }
    });
    console.log(this.fields, this.model);
  }

  private updateFieldsAndGetValidity(fields: FormlyFieldConfig[]) {
    let valid = true;
    fields.forEach(field => {
      if (field.fieldGroup) {
        valid = valid && this.updateFieldsAndGetValidity(field.fieldGroup);
      } else if (field.fieldArray) {
        valid = valid && this.updateFieldsAndGetValidity([field.fieldArray]);
      } else {
        if ((field.formControl as any)._pendingValue != field.formControl.value) {
          field.formControl.setValue((field.formControl as any)._pendingValue);
          field.formControl.markAsDirty();
        }
        valid = valid && field.formControl.valid;
      }
    });
    return valid;
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
