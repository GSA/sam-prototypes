import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: ` <p>Subaward</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlySubawardComponent extends FieldType {}
