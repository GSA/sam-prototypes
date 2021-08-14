import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
} from "@gsa-sam/components";
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { IntegrityServiceModule } from "../../services/integrity-service/integrity-service.module";

import { IntegrityDisplayRoutingModule } from "./integrity-display-routing.module";
import { IntegrityDisplayComponent } from "./integrity-display.component";

import { AppLayoutModule } from '../../app-layout/app-layout.module';

@NgModule({
  declarations: [IntegrityDisplayComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSubheaderModule,
    AppLayoutModule,
    IntegrityServiceModule,
    IntegrityDisplayRoutingModule
  ],
  exports: [IntegrityDisplayComponent],
})
export class IntegrityDisplayModule {}
