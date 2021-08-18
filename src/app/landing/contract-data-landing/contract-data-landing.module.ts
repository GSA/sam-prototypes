import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { ContractDataLandingRoutingModule } from "./contract-data-landing-routing.module";
import { ContractDataLandingComponent } from "./contract-data-landing.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [ContractDataLandingComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    ContractDataLandingRoutingModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [ContractDataLandingComponent],
})
export class ContractDataLandingModule { }
