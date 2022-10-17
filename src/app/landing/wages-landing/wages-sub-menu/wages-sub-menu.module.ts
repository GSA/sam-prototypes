import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsSideToolbarModule,
} from "@gsa-sam/components";

import { WagesSubMenuComponent } from "./wages-sub-menu.component";

@NgModule({
  declarations: [WagesSubMenuComponent],
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsSideToolbarModule,
    SdsAccordionModule,
  ],
  exports: [WagesSubMenuComponent],
})
export class WagesSubMenuModule {}
