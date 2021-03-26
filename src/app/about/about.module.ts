import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";

import { SdsSubheaderModule, SideToolbarModule } from "@gsa-sam/layouts";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,

    SdsSubheaderModule,
    SdsSelectionPanelModule,
    SideToolbarModule,
    SdsIconModule,
    AboutRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
