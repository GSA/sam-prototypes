import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";
import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsSearchModule,
  SdsExternalLinkDirectivesModule,
  SdsVideoPlayerModule
} from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { WagesLandingRoutingModule } from "./wages-landing-routing.module";
import { WagesLandingComponent } from "./wages-landing.component";
import { WagesSubPagesComponent } from "./wages-sub-pages.component";
import { WagesSubMenuModule } from "./wages-sub-menu/wages-sub-menu.module";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [WagesLandingComponent, WagesSubPagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSearchModule,
    SdsSubheaderModule,
    SdsVideoPlayerModule,
    SdsAccordionModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
    SdsExternalLinkDirectivesModule,

    WagesSubMenuModule,
    WagesLandingRoutingModule,
    IconModule,
  ],
  exports: [WagesLandingComponent, WagesSubPagesComponent],
})
export class WagesLandingModule {}
