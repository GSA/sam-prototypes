import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PartnersRoutingModule } from "./partners-routing.module";
import { PartnersComponent } from "./partners.component";
import { SdsIconModule } from "@gsa-sam/components";
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [PartnersComponent],
})
export class PartnersModule {}
