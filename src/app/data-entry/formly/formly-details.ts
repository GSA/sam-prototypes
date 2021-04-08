import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: `<app-review-details></app-review-details>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDetailsComponent extends FieldType {}
