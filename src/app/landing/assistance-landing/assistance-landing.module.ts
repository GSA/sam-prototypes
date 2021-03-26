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

import { AssistanceLandingRoutingModule } from "./assistance-landing-routing.module";
import { AssistanceLandingComponent } from "./assistance-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [AssistanceLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    SdsVideoPlayerModule,
    AssistanceLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [AssistanceLandingComponent],
})
export class AssistanceLandingModule {}
