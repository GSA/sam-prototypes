import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
} from "@gsa-sam/components";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { PoliciesRoutingModule } from "./policies-routing.module";
import { PoliciesComponent } from "./policies.component";

@NgModule({
  declarations: [PoliciesComponent],
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSubheaderModule,
    PoliciesRoutingModule,
  ],
  exports: [PoliciesComponent],
})
export class PoliciesModule {}
