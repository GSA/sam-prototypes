import { StepperSelectionEvent } from "@angular/cdk/stepper";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormlyUtilsService } from "./formly-utils.service";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { find } from "rxjs/operators";

@Component({
  template: ` <app-stepper
    linear
    [hideSidePannel]="to.hideSidePannel"
    [selectedIndex]="selectedIndex"
    (selectionChange)="onStepChange($event)"
    [stepInfoList]="stepInfoList"
  >
    <cdk-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last"
    >
      <ng-template cdkStepLabel>
        <span
          *ngIf="validateSuccessStepForm(step, index)"
          class="usa-button sds-button--circle"
        >
          <sds-icon [icon]="'check'"></sds-icon>
        </span>
        <span
          *ngIf="validateFailureStepForm(step, index)"
          class="usa-button sds-button--circle sds-button--danger"
        >
          <sds-icon [icon]="'x'"></sds-icon>
        </span>
        {{ step.templateOptions.label }}
      </ng-template>
      <div *ngIf="!step.template">
        <div class="padding-bottom-3" *ngIf="step.templateOptions.hasHeader">
          <h1>
            {{ step.templateOptions.label }}
          </h1>
          <hr />
        </div>

        <!-- <formly-field [field]="step"></formly-field> -->
        <div *ngIf="!step.templateOptions.reviewMode; else reviewStep">
          <formly-field [field]="step"></formly-field>
        </div>
        <ng-template #reviewStep>
          <ng-container *ngFor="let stepField of field.fieldGroup">
            <formly-field #reviewAll [field]="stepField"></formly-field>
          </ng-container>
        </ng-template>
      </div>

      <div *ngIf="step.template"></div>
    </cdk-step>
  </app-stepper>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepperComponent extends FieldType {
  stepInfoList: any[] = [];
  selectedIndex;
  ngOnInit() {
    this.field.fieldGroup.forEach((x, index) => {
      let names: any = {};
      names.index = index;
      names.label = x.templateOptions.label;
      this.stepInfoList.push(names);
    });
  }

  getStepForm(i, field: FormlyFieldConfig) {
    let isValid = false;
    if (field.template) {
      isValid = true;
    } else {
      isValid = this.isValid(field);
    }
    return { invalid: !isValid, valid: isValid };
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every((f) => this.isValid(f));
  }

  onStepChange($event: StepperSelectionEvent) {
    this.model.selectedIndex = $event.selectedIndex;
    this.selectedIndex = $event.selectedIndex;
    // const findField = this.field.fieldGroup[$event.selectedIndex];
    // if (findField.templateOptions.reviewMode) {
    //   FormlyUtilsService.setReadonlyMode(
    //     true,
    //     this.field.fieldGroup,
    //     this.model
    //   );
    // }
    // // if (
    // //   $event.previouslySelectedIndex ===
    // //   this.field.fieldGroup.length - 1
    // // )
    // else {
    //   FormlyUtilsService.setReadonlyMode(false, this.field.fieldGroup);
    // }
  }
  validateSuccessStepForm(field: FormlyFieldConfig, index: number) {
    let isvalid = false;
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      field.fieldGroup.forEach((element) => {
        if (!isvalid)
          if (element.formControl.untouched) {
            isvalid = false;
            return isvalid;
          } else {
            element.formControl.markAllAsTouched();
          }

        if (element.formControl.valid) {
          isvalid = true;
        }
      });
    }
    return isvalid;
  }

  validateFailureStepForm(field: FormlyFieldConfig, index: number) {
    let isvalid = false;
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      field.fieldGroup.forEach((element) => {
        if (!isvalid) {
          if (element.formControl.untouched) {
            isvalid = false;
            return isvalid;
          } else {
            element.formControl.markAllAsTouched();
          }
        }
        if (element.formControl.invalid) {
          isvalid = true;
        }
      });
    }
    return isvalid;
  }
}
