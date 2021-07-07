import { Directive, Input } from '@angular/core';
import { SdsFormlyStepComponent } from './sds-formly-step.component';

@Directive({
  selector: '[sdsFormlyStepper]'
})
export class SdsFormlyStepper {

  constructor() { }

  @Input()
  get linear(): boolean {
    return this._linear;
  }
  set linear(value: boolean) {
    this._linear = value;
  }
  private _linear = false;

  get selected(): SdsFormlyStepComponent {
    return this._selected;
  }
  set selected(value: SdsFormlyStepComponent) {
    this._selected = value;
  }

  private _selected = null;

}
