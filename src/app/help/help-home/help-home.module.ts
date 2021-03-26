import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SdsSearchModule, SdsIconModule } from "@gsa-sam/components";

import { HelpHomeRoutingModule } from "./help-home-routing.module";
import { HelpHomeComponent } from "./help-home.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [HelpHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    SdsSearchModule,
    HelpHomeRoutingModule,
    SdsIconModule,
  ],
  exports: [HelpHomeComponent],
})
export class HelpHomeModule {}
