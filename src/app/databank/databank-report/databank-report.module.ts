import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { HierarchyPickerModule } from "../../components/hierarchy-picker/hierarchy-picker.module";
import { HierarchyNavPickerModule } from "../../components/hierarchy-nav-picker/hierarchy-nav-picker.module";

import { DatabankServiceModule } from "../../services/databank-service/databank-service.module";

import { DatabankReportRoutingModule } from "./databank-report-routing.module";
import { DatabankReportComponent } from "./databank-report.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [DatabankReportComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    SdsSubheaderModule,
    HierarchyPickerModule,
    HierarchyNavPickerModule,
    DatabankServiceModule,
    DatabankReportRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [DatabankReportComponent],
})
export class DatabankReportModule {}
