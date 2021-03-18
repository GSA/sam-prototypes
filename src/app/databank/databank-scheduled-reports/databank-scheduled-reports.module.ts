import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankScheduledReportsRoutingModule } from "./databank-scheduled-reports-routing.module";
import { DatabankScheduledReportsComponent } from "./databank-scheduled-reports.component";
import { SdsIconModule } from "@gsa-sam/components";

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule,
    SdsSubheaderModule,
    DatabankScheduledReportsRoutingModule,
  ],
  exports: [DatabankScheduledReportsComponent],
})
export class DatabankScheduledReportsModule {}
