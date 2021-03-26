import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IntegrityRoutingModule } from "./integrity-routing.module";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntegrityRoutingModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
})
export class IntegrityModule {}
