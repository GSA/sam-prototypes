import { Component, OnInit, Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import { SdsStepper } from '@gsa-sam/sam-formly';
import { SystemAccountEditorService } from '../system-account-editor-service/system-account-editor.service';


@Component({
  selector: 'system-account-form',
  templateUrl: './system-account-form.component.html',
  providers: [SdsStepper],
})
export class SystemAccountFormComponent implements OnInit {

  id: string = 'system-account';

  showLoading = false;

  steps: any[] = [
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

  currentStepId: string;

  reinitializeComponents = false;

  onStepChange($event) {
    this.currentStepId = $event.id;
  }

  onSaveData(data: {model: any, metadata: any}) {
    console.log(data);
  }

  updateModel($event) {
    console.log('Updating...' + $event);
  }

  constructor(public editorService: SystemAccountEditorService) { 
  }

  ngOnInit(): void {
  }

}
