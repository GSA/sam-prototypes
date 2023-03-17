import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { EntityRegistrationEditorService } from "../../services/entity-registration-editor-service/entity-registration-editor.service";

@Component({
  selector: "app-entity-registration-form",
  templateUrl: "./entity-registration-form.component.html",
})
export class EntityRegistrationFormComponent implements OnInit {
  currentPageIndex = 0;
  form = new FormGroup({});
  model: any = { selectedIndex: 0 };
  options: FormlyFormOptions = {};

  constructor(public service: EntityRegistrationEditorService) {}

  ngOnInit() {}

  onSelectionChange(index) {
    this.model["selectedIndex"] = index;
    this.currentPageIndex = index;
  }
  validateSuccessStepForm(field: FormlyFieldConfig, index: number) {
    let isvalid = false;
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      field.fieldGroup.forEach((element) => {
        if (!isvalid)
          if (element.formControl.untouched) {
            isvalid = false;
            return isvalid;
          } else {
            element.formControl.markAllAsTouched();
          }

        if (element.formControl.valid) {
          isvalid = true;
        }
      });
    }
    return isvalid;
  }

  validateFailureStepForm(field: FormlyFieldConfig, index: number) {
    let isvalid = false;
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      field.fieldGroup.forEach((element) => {
        if (!isvalid) {
          if (element.formControl.untouched) {
            isvalid = false;
            return isvalid;
          } else {
            element.formControl.markAllAsTouched();
          }
        }
        if (element.formControl.invalid) {
          isvalid = true;
        }
      });
    }
    return isvalid;
  }
  onDownload(event) {
    console.log("Downloading...");
  }
}
