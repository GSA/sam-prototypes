import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import {
  SdsPageModule,
  SdsSearchModule,
} from "@gsa-sam/components";

import { HelpPageRoutingModule } from "./help-page-routing.module";
import { HelpPageComponent } from "./help-page.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    IconModule,
    SdsSubheaderModule,
    SdsPageModule,
    SdsSearchModule,
    HelpPageRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [HelpPageComponent],
})
export class HelpPageModule { }
