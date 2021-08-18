import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SdsSearchModule } from "@gsa-sam/components";

import { HierarchyLandingFederalRoutingModule } from "./hierarchy-landing-federal-routing.module";
import { HierarchyLandingFederalComponent } from "./hierarchy-landing-federal.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [HierarchyLandingFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
    FormsModule,
    SdsSearchModule,
    HierarchyLandingFederalRoutingModule,
  ],
  exports: [HierarchyLandingFederalComponent],
})
export class HierarchyLandingFederalModule { }
