import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import {
  SdsIconModule,
  SdsPageModule,
  SdsSearchModule,
} from "@gsa-sam/components";

import { HelpPageRoutingModule } from "./help-page-routing.module";
import { HelpPageComponent } from "./help-page.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    SdsSubheaderModule,
    SdsPageModule,
    SdsSearchModule,
    HelpPageRoutingModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [HelpPageComponent],
})
export class HelpPageModule {}
