import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsSelectionPanelModule, SdsToastModule } from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { AppLayoutModule } from '../../../app-layout/app-layout.module';
import { SdsActionsMenuModule, SideToolbarModule } from "@gsa-sam/layouts";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  slashCircleFill,
  checkCircleFill,
  circle,
  question,
  save,
  x
} from "ngx-bootstrap-icons";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

import { SystemAccountFormRoutingModule } from './system-account-form-routing.module';
import { SystemAccountEditorServiceModule } from '../system-account-editor-service/system-account-editor-service.module';
import { SystemAccountFormComponent } from './system-account-form.component';
import { SystemAccountStepperComponent } from './system-account-stepper.component';


@NgModule({
  declarations: [SystemAccountFormComponent, SystemAccountStepperComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule, 
    SdsToastModule,
    FormlyModule,
    SdsFormlyModule,
    SideToolbarModule,
    SdsStepperModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
    SystemAccountEditorServiceModule,
    SystemAccountFormRoutingModule
  ],
  exports: [SystemAccountFormComponent, SystemAccountStepperComponent]
})
export class SystemAccountFormModule { }