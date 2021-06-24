import { ChangeDetectorRef, Component } from "@angular/core";
import { SdsDialogService } from "@gsa-sam/components";
import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FieldArrayType, FormlyFormBuilder } from "@ngx-formly/core";

@Component({
  selector: "formly-readonly-repeat-section",
  template: `    
  <div *ngFor="let field of field.fieldGroup; let i = index" class="margin-top-2">
        <formly-group [field]="field" [options]="options" [form]="formControl">
        </formly-group>
  </div>
  `,
})
export class SubawardeeReadOnlyRepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
