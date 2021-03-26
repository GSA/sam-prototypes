import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankScheduledReportsRoutingModule } from "./databank-scheduled-reports-routing.module";
import { DatabankScheduledReportsComponent } from "./databank-scheduled-reports.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule,
    SdsSubheaderModule,
    DatabankScheduledReportsRoutingModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [DatabankScheduledReportsComponent],
})
export class DatabankScheduledReportsModule {}
