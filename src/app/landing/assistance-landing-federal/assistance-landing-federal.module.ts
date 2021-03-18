import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssistanceLandingFederalRoutingModule } from "./assistance-landing-federal-routing.module";
import { AssistanceLandingFederalComponent } from "./assistance-landing-federal.component";
import { SdsIconModule } from "@gsa-sam/components";

@NgModule({
  declarations: [AssistanceLandingFederalComponent],
  imports: [CommonModule, AssistanceLandingFederalRoutingModule, SdsIconModule],
  exports: [AssistanceLandingFederalComponent],
})
export class AssistanceLandingFederalModule {}
