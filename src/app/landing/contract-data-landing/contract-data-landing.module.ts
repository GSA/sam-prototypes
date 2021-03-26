import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { ContractDataLandingRoutingModule } from "./contract-data-landing-routing.module";
import { ContractDataLandingComponent } from "./contract-data-landing.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [ContractDataLandingComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    ContractDataLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [ContractDataLandingComponent],
})
export class ContractDataLandingModule {}
