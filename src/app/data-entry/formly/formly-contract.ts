import { Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { SdsIconComponent } from "@gsa-sam/components";
import { FieldType } from "@ngx-formly/core";

@Component({
  template: `<app-review-contract></app-review-contract>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyContractComponent extends FieldType {}
