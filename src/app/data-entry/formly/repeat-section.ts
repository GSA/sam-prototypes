import { Component } from "@angular/core";
import { SdsDialogService } from "@gsa-sam/components";
import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FieldArrayType, FormlyFormBuilder } from "@ngx-formly/core";

@Component({
  selector: "formly-repeat-section",
  template: `
    <div class="row">
      <h3>Add Subawardee</h3>
      <input
        #input
        class="usa-input"
        id="input-type-text"
        name="input-type-text"
        [placeholder]="field.fieldArray.templateOptions.inputPlaceHolder"
        type="text"
      />
      <button
        class="usa-button"
        type="button"
        (click)="addSubawardee(input.value)"
      >
        {{ field.fieldArray.templateOptions.btnText }}
      </button>
    </div>
    <div
      *ngFor="let field of field.fieldGroup; let i = index"
      class="margin-top-2"
    >
      <formly-group [field]="field" [options]="options" [form]="formControl">
        <div class="col-sm-2 d-flex align-items-center">
          <button
            class="usa-button sds-danger"
            type="button"
            (click)="remove(i)"
          >
            Remove
          </button>
        </div>
      </formly-group>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder, public dialog: SdsDialogService) {
    super(builder);
  }
  addSubawardee(id) {
    const model1 = this.field.fieldArray.templateOptions.getDetails(
      id.toString() + "+AWARD"
    );
    const data: any = {
      fields: this.field.fieldArray.templateOptions.subawardeefields,
      model: model1,
      submit: "Submit",
      title: "Add Subawardee",
      cancel: "No thanks",
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: "medium",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.field.fieldArray.fieldGroup[0].templateOptions.subawardItem = result;
        this.add();
        this.model[this.model.length - 1] = result;
        console.log(this.model, "model repeater");
      }
    });
  }
}
