import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: ` <app-stepper linear [hideSidePannel]="to.hideSidePannel">
    <cdk-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last"
    >
      <ng-template cdkStepLabel>
        <span
          *ngIf="isValid(step) && step.formControl.dirty"
          class="usa-button sds-button--circle"
        >
          <sds-icon [icon]="'check'"></sds-icon>
        </span>
        <span
          *ngIf="!isValid(step) && step.formControl.dirty"
          class="usa-button sds-button--circle sds-button--danger"
        >
          <sds-icon [icon]="'x'"></sds-icon>
        </span>
        {{ step.templateOptions.label }}
      </ng-template>
      <div *ngIf="!step.template">
        <h1>{{ step.templateOptions.label }}</h1>
        <hr />
        <div class="padding-top-3">
          <formly-field [field]="step"></formly-field>
        </div>
      </div>
      <div *ngIf="step.template"></div>
    </cdk-step>
  </app-stepper>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepperComponent extends FieldType {
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
}
