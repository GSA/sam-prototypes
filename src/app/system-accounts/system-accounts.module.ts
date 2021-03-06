import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemAccountsRoutingModule } from "./system-accounts-routing.module";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SystemAccountsRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [],
})
export class SystemAccountsModule {}
