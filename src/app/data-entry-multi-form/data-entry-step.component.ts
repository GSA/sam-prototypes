import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";


let nextId = 0;

@Component({
  selector: `[sdsStepHeader]`,
  template: `<ng-content></ng-content>`
})
export class SdsStepHeaderComponent {}

@Component({
  selector: `[sdsStepFooter]`,
  template: '<ng-content></ng-content>'
})
export class SdsStepFooterComponent {}

@Component({
  selector: `sds-step`,
  host: {
    '[attr.id]': 'id',
  },
  template: `
    <ng-container *ngIf="selected">
      <ng-container *ngIf="stepTemplate; else formlyField" [ngTemplateOutlet]="stepTemplate"></ng-container>
      <ng-template #formlyField>
        <ng-content select="[sdsStepHeader]"></ng-content>
        <formly-form class="grid-col-8 padding-right-2" *ngIf="fieldConfig"
          [model]="model" [fields]="[fieldConfig]"
          [options]="options" (modelChange)="modelChange.emit($event)">
        </formly-form>
        <ng-content select="[sdsStepFooter]"></ng-content>
      </ng-template>
      <ng-content select="sds-step"></ng-content>
    </ng-container>
  `
})
export class DataEntryStepComponent {
  @ContentChildren(DataEntryStepComponent) children: QueryList<DataEntryStepComponent>;

  @Input() stepTemplate: TemplateRef<any>;

  @Input() text: string;

  @Input() id: string = `sds-step-${nextId++}`;

  @Input() selected = false;

  @Input() fieldConfig?: FormlyFieldConfig;

  @Input() options?: FormlyFormOptions; // Each step gets it's own options by default if not provided to determine whether to show error or not

  @Input() model?: any;

  @Input() valid?: boolean;

  @Input() hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  @Input() hide?: boolean;

  @Input() isReview?: boolean

  @Input() mode: NavigationMode;

  @Input() route: string;

  @Output() modelChange = new EventEmitter<any>();

}