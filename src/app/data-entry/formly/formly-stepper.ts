import { StepperSelectionEvent } from "@angular/cdk/stepper";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: ` <app-stepper
    linear
    [hideSidePannel]="to.hideSidePannel"
    (selectionChange)="onStepChange($event)"
  >
    <cdk-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last"
    >
      <ng-template cdkStepLabel>
        <!-- <span
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
        </span> -->
        {{ step.templateOptions.label }}
      </ng-template>
      <div *ngIf="!step.template">
        <h1>{{ step.templateOptions.label }}</h1>
        <hr />
        <div class="padding-top-3">
          <!-- <formly-field [field]="step"></formly-field> -->
          <div
            *ngIf="
              selectedIndex != field.fieldGroup.length - 1;
              else reviewStep
            "
          >
            <formly-field [field]="step"></formly-field>
          </div>
          <ng-template #reviewStep>
            <ng-container *ngFor="let stepField of field.fieldGroup">
              <formly-field #reviewAll [field]="stepField"></formly-field>
            </ng-container>
          </ng-template>
        </div>
      </div>
      <div *ngIf="step.template"></div>
    </cdk-step>
  </app-stepper>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepperComponent extends FieldType {
  selectedIndex;
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
    if (field.key || !field.fieldGroup) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every((f) => this.isValid(f));
  }

  onStepChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === this.field.fieldGroup.length - 1) {
      FormlyUtilsService.setReadonlyMode(true, this.field.fieldGroup);
    } else if (
      $event.previouslySelectedIndex ===
      this.field.fieldGroup.length - 1
    ) {
      FormlyUtilsService.setReadonlyMode(false, this.field.fieldGroup);
    }
  }
}
