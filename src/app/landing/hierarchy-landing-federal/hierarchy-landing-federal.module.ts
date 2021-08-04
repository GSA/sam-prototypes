import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SdsSearchModule } from "@gsa-sam/components";

import { HierarchyLandingFederalRoutingModule } from "./hierarchy-landing-federal-routing.module";
import { HierarchyLandingFederalComponent } from "./hierarchy-landing-federal.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  declarations: [HierarchyLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    FormsModule,
    SdsSearchModule,
    HierarchyLandingFederalRoutingModule,
    IconModule,
  ],
  exports: [HierarchyLandingFederalComponent],
})
export class HierarchyLandingFederalModule {}
