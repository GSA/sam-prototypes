import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule,
} from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { RegistrationLandingRoutingModule } from "./registration-landing-routing.module";
import { RegistrationLandingComponent } from "./registration-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [RegistrationLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    SdsVideoPlayerModule,
    RegistrationLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [RegistrationLandingComponent],
})
export class RegistrationLandingModule {}
