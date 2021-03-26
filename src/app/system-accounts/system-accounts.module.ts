import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemAccountsRoutingModule } from "./system-accounts-routing.module";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SystemAccountsRoutingModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [],
})
export class SystemAccountsModule {}
