import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PartnersRoutingModule } from "./partners-routing.module";
import { PartnersComponent } from "./partners.component";
import { SdsIconModule } from "@gsa-sam/components";
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [PartnersComponent],
})
export class PartnersModule {}
