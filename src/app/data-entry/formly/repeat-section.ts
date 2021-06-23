import { ChangeDetectorRef, Component } from "@angular/core";
import { SdsDialogService } from "@gsa-sam/components";
import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FieldArrayType, FormlyFormBuilder } from "@ngx-formly/core";

@Component({
  selector: "formly-repeat-section",
  template: `
    <div class="grid-col">
      <div class="grid-row">
        <div class="grid-col">
          <h3>{{field.fieldArray.templateOptions.title}}</h3>
          <input
            #input
            class="usa-input"
            id="input-type-text"
            name="input-type-text"
            [placeholder]="field.fieldArray.templateOptions.inputPlaceHolder"
            type="text"
          />
        </div>
        <div class="grid-col padding-left-3 padding-top-3">
          <button
            class="usa-button"
            type="button"
            (click)="addSubawardee(input.value)"
          >
            {{ field.fieldArray.templateOptions.btnText }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="sds-card sds-card__body--accent-cool margin-top-3"
      *ngIf="this.showNoresultFound"
    >
      <div class="sds-card__header sds-card__header--left">
        <h2 class="sds-card__title ">No Subawardees</h2>
      </div>
      <div class="sds-card__body ">
        <p>
          To add a subawardee, begin by entering a subawardee Unique Entity ID
          above.
        </p>
      </div>
    </div>

    <div *ngIf="!showNoresultFound">
      <div
        *ngFor="let field of field.fieldGroup; let i = index"
        class="margin-top-2"
      >
        <formly-group [field]="field" [options]="options" [form]="formControl">
        </formly-group>
      </div>
    </div>
  `,
})
export class SubawardeeRepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder, public dialog: SdsDialogService, public cdr: ChangeDetectorRef) {
    super(builder);
  }
  showNoresultFound: boolean = true;
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
        const registeredForm = this.formControl.controls[this.formControl.controls.length - 1];
        registeredForm.setValue({[this.to.repeaterKey]: result});
        console.log(this.formControl.value);
        this.showNoresultFound = this.model.length == 0 ? true : false;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnInit(): void {
    if (this.model != null && this.model.length > 0) {
      this.field.fieldArray.fieldGroup[0].templateOptions.subawardItem = this.model;
      this.showNoresultFound = this.model.length == 0 ? true : false;
    }
  }

  removeItem(i): void {
    this.remove(i);
    this.showNoresultFound = this.model.length == 0 ? true : false;
  }
}
