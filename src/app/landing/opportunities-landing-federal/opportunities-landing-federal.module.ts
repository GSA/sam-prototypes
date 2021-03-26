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
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [OpportunitiesLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    OpportunitiesLandingFederalRoutingModule,
    SdsIconModule,
  ],
  exports: [OpportunitiesLandingFederalComponent],
})
export class OpportunitiesLandingFederalModule {}
