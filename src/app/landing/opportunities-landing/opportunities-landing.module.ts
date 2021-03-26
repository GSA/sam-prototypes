import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SdsIconModule } from "@gsa-sam/components";

import { SdsSearchModule, SdsVideoPlayerModule } from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { OpportunitiesLandingRoutingModule } from "./opportunities-landing-routing.module";
import { OpportunitiesLandingComponent } from "./opportunities-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [OpportunitiesLandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    SdsAccordionModule,
    RouterModule,
    OpportunitiesLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [OpportunitiesLandingComponent],
})
export class OpportunitiesLandingModule {}
