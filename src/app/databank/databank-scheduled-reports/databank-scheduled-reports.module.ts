import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankScheduledReportsRoutingModule } from "./databank-scheduled-reports-routing.module";
import { DatabankScheduledReportsComponent } from "./databank-scheduled-reports.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule,
    SdsSubheaderModule,
    DatabankScheduledReportsRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [DatabankScheduledReportsComponent],
})
export class DatabankScheduledReportsModule {}
