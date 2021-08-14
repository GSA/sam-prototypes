import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  SdsSearchModule,
  SdsVideoPlayerModule
} from "@gsa-sam/components";

import { OpportunitiesLandingFederalRoutingModule } from "./opportunities-landing-federal-routing.module";
import { OpportunitiesLandingFederalComponent } from "./opportunities-landing-federal.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [OpportunitiesLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    OpportunitiesLandingFederalRoutingModule,
    IconModule,
  ],
  exports: [OpportunitiesLandingFederalComponent],
})
export class OpportunitiesLandingFederalModule {}
