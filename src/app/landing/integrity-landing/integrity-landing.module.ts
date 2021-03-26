import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSearchModule, SdsIconModule } from "@gsa-sam/components";

import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { IntegrityLandingRoutingModule } from "./integrity-landing-routing.module";
import { IntegrityLandingComponent } from "./integrity-landing.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [IntegrityLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsAccordionModule,
    IntegrityLandingRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [IntegrityLandingComponent],
})
export class IntegrityLandingModule {}
