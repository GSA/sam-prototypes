import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssistanceLandingFederalRoutingModule } from "./assistance-landing-federal-routing.module";
import { AssistanceLandingFederalComponent } from "./assistance-landing-federal.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [AssistanceLandingFederalComponent],
  imports: [
    CommonModule,
    AssistanceLandingFederalRoutingModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [AssistanceLandingFederalComponent],
})
export class AssistanceLandingFederalModule { }
