import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  template: `<p>test</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDetailsComponent extends FieldType {}
