import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { HierarchyPickerModule } from "../../components/hierarchy-picker/hierarchy-picker.module";
import { HierarchyNavPickerModule } from "../../components/hierarchy-nav-picker/hierarchy-nav-picker.module";

import { DatabankServiceModule } from "../../services/databank-service/databank-service.module";

import { DatabankReportRoutingModule } from "./databank-report-routing.module";
import { DatabankReportComponent } from "./databank-report.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [DatabankReportComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule,
    SdsSubheaderModule,
    HierarchyPickerModule,
    HierarchyNavPickerModule,
    DatabankServiceModule,
    DatabankReportRoutingModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [DatabankReportComponent],
})
export class DatabankReportModule {}
