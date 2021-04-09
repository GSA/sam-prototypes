import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { WagesSubMenuModule } from "../wages-sub-menu/wages-sub-menu.module";

import { WagesDbaConformancesRoutingModule } from "./wages-dba-conformances-routing.module";
import { WagesDbaConformancesComponent } from "./wages-dba-conformances.component";

@NgModule({
  declarations: [WagesDbaConformancesComponent],
  imports: [
    CommonModule,
    RouterModule,

    SdsSubheaderModule,
    WagesSubMenuModule,
    WagesDbaConformancesRoutingModule,
  ],
  exports: [WagesDbaConformancesComponent],
})
export class WagesDbaConformancesModule {}
