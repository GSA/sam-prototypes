import { Component, OnInit, Inject, TemplateRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { SdsFormlyStepper } from './sds-formly-stepper';

let nextId = 0;

 const hasValues = 
    (obj) => Object.values(obj).some(v => v !== null && typeof v !== "undefined")


@Component({
  selector: 'sds-formly-step',
  template: `
      <ng-container *ngIf="stepTemplate; else formlyField" [ngTemplateOutlet]="stepTemplate"></ng-container>
        <ng-template #formlyField>
          <form [formGroup]="form">
            <formly-form
              [model]="model" [fields]="[fieldConfig]"
              [options]="options" [form]="form" (modelChange)="onModelChange($event)">
            </formly-form>
          </form>
        </ng-template>  
  `
})
export class SdsFormlyStepComponent implements OnInit {



  form = new FormGroup({});

  @Input() stepTemplate: TemplateRef<any>;

  /**
   * Required when stepTemplate is defined - provides ways to check
   * if the custom template step is valid
   */
  @Input() stepValidationFn: (model: any, field?: FormlyFieldConfig) => boolean | void;

  @Input() text: string;

  @Input() id: string = `sds-step-${nextId++}`;

  @Input() set selected(value: boolean) {
      this._selected = value;
      if(this._selected) {
        this.select();
      }
  }
  get selected(): boolean {
    return this._selected;
  }
  private _selected: boolean = false;

  @Input() fieldConfig?: FormlyFieldConfig;

  @Input() options?: FormlyFormOptions; // Each step gets it's own options by default if not provided to determine whether to show error or not

  @Input() model?: any;

  @Input() hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  @Input() hide?: boolean;

  @Input() disable?: boolean;

  @Output() modelChange = new EventEmitter<any>();

  get interacted(): boolean {
    return hasValues(this.model);
  }

  get valid(): boolean {
    return true;
  }

  constructor(@Inject(forwardRef(() => SdsFormlyStepper)) public _stepper: SdsFormlyStepper) { 
      // Injection works here
  }

  ngOnInit(): void {
  }

  select(): void {
    this._stepper.selected = this;
  }

  reset() : void {

  }

}
