import { Component } from "@angular/core";
import { SdsDialogService } from "@gsa-sam/components";
import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FieldArrayType, FormlyFormBuilder } from "@ngx-formly/core";

@Component({
  selector: "formly-repeat-section",
  template: `
    <div style="margin:30px 0;">
      <label class="usa-label" for="input-type-text"
        >Input Unique Entity ID</label
      >
      <input
        class="usa-input"
        id="input-type-text"
        name="input-type-text"
        type="text"
      />
      <button class="usa-button" type="button" (click)="addSubawardee()">
        {{ field.fieldArray.templateOptions.btnText }}
      </button>
    </div>
    <div *ngFor="let field of field.fieldGroup; let i = index">
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
  addSubawardee() {
    const model1 = this.field.fieldArray.templateOptions.getDetails;
    console.log("model1", model1);
    const data: any = {
      fields: this.field.fieldArray.templateOptions.subawardeefields,
      model: this.field.fieldArray.templateOptions.getDetails,
      //  model: this.field.fieldArray.templateOptions.subawardeeModel,
      submit: "Submit",
      title: "Add Subawardee",
      //options: this.subawardeeOptions,
      cancel: "No thanks",
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: "medium",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.to.subawardeeModel = result;
        this.field.fieldArray.fieldGroup[0].templateOptions.subawardItem = result;
        this.add();
      }
    });
  }
}
