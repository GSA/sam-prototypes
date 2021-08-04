import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankHistoryRoutingModule } from "./databank-history-routing.module";
import { DatabankHistoryComponent } from "./databank-history.component";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [DatabankHistoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconModule,
    SdsSubheaderModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),

    DatabankHistoryRoutingModule,
  ],
  exports: [DatabankHistoryComponent],
})
export class DatabankHistoryModule { }
