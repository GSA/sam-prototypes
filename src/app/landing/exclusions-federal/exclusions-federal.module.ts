import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule,
} from "@gsa-sam/components";

import { ExclusionsFederalRoutingModule } from "./exclusions-federal-routing.module";
import { ExclusionsFederalComponent } from "./exclusions-federal.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [ExclusionsFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    ExclusionsFederalRoutingModule,
    SdsIconModule,
  ],
  exports: [ExclusionsFederalComponent],
})
export class ExclusionsFederalModule {}
