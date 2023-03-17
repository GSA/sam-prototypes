import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";

import { SystemAccountEditorService } from "../system-account-editor/system-account-editor-service/system-account-editor.service";

@Component({
  selector: "system-account-details",
  templateUrl: "./system-account-details.component.html",
})
export class SystemAccountDetailsComponent implements OnInit {
  form = new FormGroup({});

  constructor(public editorService: SystemAccountEditorService) {}

  ngOnInit(): void {
    FormlyUtilsService.setReadonlyMode(true, this.editorService.fields);
  }
}
