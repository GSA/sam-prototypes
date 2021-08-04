import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsSelectionPanelModule } from "@gsa-sam/components";

import { SdsSubheaderModule, SideToolbarModule } from "@gsa-sam/layouts";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,

    SdsSubheaderModule,
    SdsSelectionPanelModule,
    SideToolbarModule,
    IconModule,
    AboutRoutingModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
  ],
  exports: [AboutComponent],
})
export class AboutModule { }
