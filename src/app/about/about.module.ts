import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";

import { SdsSubheaderModule, SideToolbarModule } from "@gsa-sam/layouts";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,

    SdsSubheaderModule,
    SdsSelectionPanelModule,
    SideToolbarModule,
    SdsIconModule,
    AboutRoutingModule,
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
