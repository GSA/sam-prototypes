import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

import { SdsSearchModule, SdsVideoPlayerModule } from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { OpportunitiesLandingRoutingModule } from "./opportunities-landing-routing.module";
import { OpportunitiesLandingComponent } from "./opportunities-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

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
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [OpportunitiesLandingComponent],
})
export class OpportunitiesLandingModule { }
