import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";

import { SdsFormlyModule } from "@gsa-sam/sam-formly";

import { DataEntryLayoutModule } from "../../app-layout/data-entry-layout/data-entry-layout.module";

import { SystemAccountRoutingModule } from "./system-account-routing.module";
import { SystemAccountComponent } from "./system-account.component";
import { AppLayoutFormlyModule } from "src/app/app-layout/formly/formly-module";
import { StepperModule } from "../../app-layout/stepper/stepper.module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";

@NgModule({
  declarations: [SystemAccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsFormlyModule,
    FormlyModule,
    IconModule,
    StepperModule,
    AppLayoutFormlyModule,
    DataEntryLayoutModule,
    SystemAccountRoutingModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
  ],
  exports: [SystemAccountComponent],
})
export class SystemAccountModule { }
