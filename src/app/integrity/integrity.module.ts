import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IntegrityRoutingModule } from "./integrity-routing.module";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntegrityRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
})
export class IntegrityModule {}
