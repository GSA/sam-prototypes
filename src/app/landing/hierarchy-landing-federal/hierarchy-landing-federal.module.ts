import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SdsSearchModule, SdsIconModule } from "@gsa-sam/components";

import { HierarchyLandingFederalRoutingModule } from "./hierarchy-landing-federal-routing.module";
import { HierarchyLandingFederalComponent } from "./hierarchy-landing-federal.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [HierarchyLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
    FormsModule,
    SdsSearchModule,
    HierarchyLandingFederalRoutingModule,
    SdsIconModule,
  ],
  exports: [HierarchyLandingFederalComponent],
})
export class HierarchyLandingFederalModule {}
