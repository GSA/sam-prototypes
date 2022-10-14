import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsPageModule,
} from "@gsa-sam/components";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSubheaderModule,
    ContactRoutingModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
