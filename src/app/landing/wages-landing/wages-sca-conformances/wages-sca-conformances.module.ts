import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { WagesSubMenuModule } from "../wages-sub-menu/wages-sub-menu.module";

import { WagesScaConformancesRoutingModule } from "./wages-sca-conformances-routing.module";
import { WagesScaConformancesComponent } from "./wages-sca-conformances.component";

@NgModule({
  declarations: [WagesScaConformancesComponent],
  imports: [
    CommonModule,
    RouterModule,

    SdsSubheaderModule,
    WagesSubMenuModule,
    WagesScaConformancesRoutingModule,
  ],
  exports: [WagesScaConformancesComponent],
})
export class WagesScaConformancesModule {}
