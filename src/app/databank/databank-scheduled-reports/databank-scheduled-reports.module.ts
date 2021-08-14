import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankScheduledReportsRoutingModule } from "./databank-scheduled-reports-routing.module";
import { DatabankScheduledReportsComponent } from "./databank-scheduled-reports.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    SdsSubheaderModule,
    DatabankScheduledReportsRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [DatabankScheduledReportsComponent],
})
export class DatabankScheduledReportsModule {}
