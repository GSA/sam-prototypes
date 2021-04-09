import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSearchModule } from "@gsa-sam/components";

import { DownloadsRoutingModule } from "./downloads-routing.module";
import { DownloadsComponent } from "./downloads.component";
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsIconModule,
    SdsSubheaderModule,
    SdsSearchModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    DownloadsRoutingModule,
  ],
  exports: [DownloadsComponent],
})
export class DownloadsModule {}
