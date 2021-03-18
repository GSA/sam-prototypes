import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsIconModule,
} from "@gsa-sam/components";
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsIconModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    ProfileRoutingModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
