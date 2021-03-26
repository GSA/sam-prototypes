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

import { HierarchyLandingRoutingModule } from "./hierarchy-landing-routing.module";
import { HierarchyLandingComponent } from "./hierarchy-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [HierarchyLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    HierarchyLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [HierarchyLandingComponent],
})
export class HierarchyLandingModule {}
