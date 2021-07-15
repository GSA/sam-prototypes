import { Component, OnInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import { SdsFormlyStepper } from '../../../app-layout/formly-stepper/sds-formly-stepper';
import { SystemAccountEditorService } from '../system-account-editor-service/system-account-editor.service';


@Component({
  selector: 'system-account-form',
  templateUrl: './system-account-form.component.html',
  providers: [{provide: SdsFormlyStepper, useExisting: SystemAccountFormComponent}]
})
export class SystemAccountFormComponent extends SdsFormlyStepper implements OnInit {

  id: string = 'system-account';

  model: any = {};

  steps: any[];

  constructor(public editorService: SystemAccountEditorService) { 
    super();
    this.steps = [
      {
        id: "system-information",
        text: "System Information",
        fieldConfig: this.editorService.getFields("system-information"),
        route: "/system-accounts/editor/edit",
        mode: NavigationMode.INTERNAL
      },
      {
        id: "organization-information",
        text: "Organization Information",
        fieldConfig: this.editorService.getFields("organization-information"),
        route: "/system-accounts/editor/edit",
        mode: NavigationMode.INTERNAL,
      },
      {
        id: "permissions",
        text: "Permissions",
        fieldConfig: this.editorService.getFields("permissions"),
        route: "/system-accounts/editor/edit",
        mode: NavigationMode.INTERNAL,
      },
      {
        id: "security",
        text: "Security",
        fieldConfig: this.editorService.getFields("security"),
        route: "/system-accounts/editor/edit",
        mode: NavigationMode.INTERNAL,
      },
      {
        id: "authorization",
        text: "Authorization",
        fieldConfig: this.editorService.getFields("authorization"),
        route: "/system-accounts/editor/edit",
        mode: NavigationMode.INTERNAL,
      }
    ];
  }

  ngOnInit(): void {
  }

}
