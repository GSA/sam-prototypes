import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: `<app-subaward-data></app-subaward-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlySubawardComponent extends FieldType {}
