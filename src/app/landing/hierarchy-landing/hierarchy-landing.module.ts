import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  
} from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { HierarchyLandingRoutingModule } from "./hierarchy-landing-routing.module";
import { HierarchyLandingComponent } from "./hierarchy-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  declarations: [HierarchyLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    HierarchyLandingRoutingModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [HierarchyLandingComponent],
})
export class HierarchyLandingModule {}
