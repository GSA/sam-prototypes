import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SdsSearchModule } from "@gsa-sam/components";

import { HelpHomeRoutingModule } from "./help-home-routing.module";
import { HelpHomeComponent } from "./help-home.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { arrowRightCircle, boxArrowUpRight, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [HelpHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ arrowRightCircle, boxArrowUpRight }),
    SdsSearchModule,
    HelpHomeRoutingModule
  ],
  exports: [HelpHomeComponent],
})
export class HelpHomeModule { }
