import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsIconModule, SdsSelectionPanelModule, SdsToastModule } from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { SdsFormlyStepperModule } from '../../../app-layout/formly-stepper/sds-formly-stepper.module';
import { AppLayoutModule } from '../../../app-layout/app-layout.module';

import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";

import { SystemAccountFormRoutingModule } from './system-account-form-routing.module';
import { SystemAccountEditorServiceModule } from '../system-account-editor-service/system-account-editor-service.module';
import { SystemAccountFormComponent } from './system-account-form.component';


@NgModule({
  declarations: [SystemAccountFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule, 
    SdsToastModule,
    FormlyModule,
    SdsFormlyModule,
    SdsSelectionPanelModule,
    SdsFormlyStepperModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
    SystemAccountEditorServiceModule,
    SystemAccountFormRoutingModule
  ],
  exports: [SystemAccountFormComponent]
})
export class SystemAccountFormModule { }
