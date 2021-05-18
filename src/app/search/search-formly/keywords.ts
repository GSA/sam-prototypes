import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  templateUrl: `keyword.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['keywords.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyKeywordComponent extends FieldType implements OnInit {

  _initialModel: any;

  ngOnInit() {
    this._initialModel = this.model && this.model[this.key as string] ? {...this.model[this.key as string]} : {};
  }

  onModelChange($event) {
    let currentModel = this.model ? this.model[this.key as string] : {};
    currentModel = {...currentModel, ...$event};
    this.form.get(this.key as string).setValue(currentModel);
  }
}