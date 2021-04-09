import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { ContractDataLandingRoutingModule } from "./contract-data-landing-routing.module";
import { ContractDataLandingComponent } from "./contract-data-landing.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [ContractDataLandingComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    ContractDataLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [ContractDataLandingComponent],
})
export class ContractDataLandingModule {}
