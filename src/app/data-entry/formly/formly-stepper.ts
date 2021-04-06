import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: `<app-stepper linear>
    <cdk-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last"
      [stepControl]="getStepForm(index, step)"
    >
      <ng-template cdkStepLabel>{{ step.templateOptions.label }}</ng-template>
      <formly-field [field]="step"></formly-field>
    </cdk-step>
  </app-stepper>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepperComponent extends FieldType {
  getStepForm(i, field: FormlyFieldConfig) {
    const isValid = this.isValid(field);

    return { invalid: !isValid, valid: isValid };
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every((f) => this.isValid(f));
  }
}
