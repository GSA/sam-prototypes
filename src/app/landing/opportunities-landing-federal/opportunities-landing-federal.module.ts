import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule,
} from "@gsa-sam/components";

import { OpportunitiesLandingFederalRoutingModule } from "./opportunities-landing-federal-routing.module";
import { OpportunitiesLandingFederalComponent } from "./opportunities-landing-federal.component";

@NgModule({
  declarations: [OpportunitiesLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,

    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    OpportunitiesLandingFederalRoutingModule,
    SdsIconModule,
  ],
  exports: [OpportunitiesLandingFederalComponent],
})
export class OpportunitiesLandingFederalModule {}
