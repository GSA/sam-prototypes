import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsIconModule, SdsSelectionPanelModule, SdsToastModule } from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
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
import { SystemAccountStepperComponent } from './system-account-stepper.component';


@NgModule({
  declarations: [SystemAccountFormComponent, SystemAccountStepperComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule, 
    SdsToastModule,
    FormlyModule,
    SdsFormlyModule,
    SdsSelectionPanelModule,
    SdsStepperModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
    SystemAccountEditorServiceModule,
    SystemAccountFormRoutingModule
  ],
  exports: [SystemAccountFormComponent, SystemAccountStepperComponent]
})
export class SystemAccountFormModule { }
