import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormlyModule } from "@ngx-formly/core";

import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { StepperModule } from "../../data-entry/stepper/stepper.module";
import { PrototypeFormlyModule } from "../../data-entry/formly/formly-module";

import { DataEntryLayoutModule } from '../../app-layout/data-entry-layout/data-entry-layout.module';

import { SystemAccountRoutingModule } from './system-account-routing.module';
import { SystemAccountComponent } from './system-account.component';

@NgModule({
  declarations: [SystemAccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsFormlyModule,
    FormlyModule,
    StepperModule,
    PrototypeFormlyModule,
    DataEntryLayoutModule,
    SystemAccountRoutingModule
  ],
  exports: [SystemAccountComponent]
})
export class SystemAccountModule { }
