import { Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { SdsIconComponent } from "@gsa-sam/components";
import { FieldType } from "@ngx-formly/core";

@Component({
  template: `
    <ng-container *ngIf="to.customResultsTemplate "
  [ngTemplateOutlet]="to.customResultsTemplate">
</ng-container>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyCustomComponent extends FieldType { }
