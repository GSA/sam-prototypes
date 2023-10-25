import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
@Component({
  templateUrl: `keyword.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['keywords.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyKeywordComponent extends FieldType implements OnInit {

  _initialModel: any;

  ngOnInit() {
    if (!this.field.fieldArray || !this.field.fieldArray['fieldGroup']) {
      throw new Error('Please define contents of keywords through a fieldGroup within the fieldArray property')
    }

    this._initialModel = this.model && this.model[this.key as string] ? {...this.model[this.key as string]} : {};
    if (this.field.fieldArray && this.field.fieldArray['fieldGroup']) {
      this.field.fieldArray['fieldGroup'].forEach((fieldConfig: FormlyFieldConfig) => {
        this.updateFieldConfig(fieldConfig);
      })
    }
  }

  /**
   * Updates field configurations for each tab content when a submit button is present. 
   * If a submit button id is not defined in the input field's template options, then simply exits
   * If submit button id is defined, then we expect a button of type submit to exist
   * in the field config's field group, and attach submit handling logic to
   * the button's click event.
   * @param fieldConfig - the FormlyFieldConfig to transform into an array
   */
  updateFieldConfig(fieldConfig: FormlyFieldConfig) {
    const submitButtonId = fieldConfig.templateOptions?.submitButtonId
    if (!submitButtonId) {
      return;
    }
    
    // If submit button is present, manually add logic to update the form when the button is clicked
    fieldConfig.fieldGroup.forEach(field => {
      if (field.id === submitButtonId) {
        field.templateOptions = field.templateOptions ? field.templateOptions : {};
        field.templateOptions.onClick = () => {
          this.updateFieldModel(fieldConfig);
        };
      }
      field.modelOptions = {updateOn: 'submit'};
    });
  }

  /**
   * Submit handling logic for a field config that contains a submit button.
   * Angular form keeps a pendingValue internally to keep track of values
   * that exist in the input field, but have not yet been updated as the model
   * to to restrictions on when to update (such as onBlur or Submit). Thus we manually
   * do the update by setting the form's value to its pending value, which will
   * trigger a model change event for clients to execute on
   * @param fieldConfig - The field config whose form control need to be updated
   */
   updateFieldModel(fieldConfig: FormlyFieldConfig) {
    // Manual update each form in formly field
    Object.keys(fieldConfig.form.controls).forEach(field => {
      const control: any = fieldConfig.form.get(field);
      if (control._pendingValue) {
        control.setValue(control._pendingValue);
        control.markAsTouched();
      }
    });
  }

  onModelChange(fieldConfig: FormlyFieldConfig) {
    this.form.get(this.key as string).setValue(fieldConfig.form.value);
  }
}