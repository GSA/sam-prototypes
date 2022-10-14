import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
} from "@gsa-sam/components";

import { WagesSubMenuComponent } from "./wages-sub-menu.component";

@NgModule({
  declarations: [WagesSubMenuComponent],
  imports: [CommonModule, SdsSideNavigationModule, SdsAccordionModule],
  exports: [WagesSubMenuComponent],
})
export class WagesSubMenuModule {}
