import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssistanceLandingFederalRoutingModule } from "./assistance-landing-federal-routing.module";
import { AssistanceLandingFederalComponent } from "./assistance-landing-federal.component";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [AssistanceLandingFederalComponent],
  imports: [
    CommonModule,
    AssistanceLandingFederalRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [AssistanceLandingFederalComponent],
})
export class AssistanceLandingFederalModule {}
