import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: `<app-review-details
    [detailsForm]="to.detailsForm"
    [detailsFormModel]="to.detailsFormModel"
    [detailsFormOptions]="to.detailsFormOptions"
    [detailsFormFields]="to.detailsFormFields"
  ></app-review-details>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDetailsComponent extends FieldType {}
