import { Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  template: ` <app-review-contract [items]="to.items"></app-review-contract>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyContractComponent extends FieldType {}
