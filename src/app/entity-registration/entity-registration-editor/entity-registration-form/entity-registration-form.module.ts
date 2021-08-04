import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FormlyModule } from "@ngx-formly/core";

import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { StepperModule } from "../../../app-layout/stepper/stepper.module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";

import { AppLayoutModule } from '../../../app-layout/app-layout.module';
import { AppLayoutFormlyModule } from '../../../app-layout/formly/formly-module';
import { DataEntryLayoutModule } from '../../../app-layout/data-entry-layout/data-entry-layout.module';

import { EntityRegistrationServiceModule } from '../../../services/entity-registration-service/entity-registration-service.module';

import { EntityRegistrationFormRoutingModule } from './entity-registration-form-routing.module';
import { EntityRegistrationFormComponent } from './entity-registration-form.component';


@NgModule({
  declarations: [EntityRegistrationFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    SdsFormlyModule,
    IconModule,
    StepperModule,
    AppLayoutModule,
    AppLayoutFormlyModule,
    DataEntryLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
    EntityRegistrationServiceModule,
    EntityRegistrationFormRoutingModule
  ],
  exports: [EntityRegistrationFormComponent]
})
export class EntityRegistrationFormModule { }