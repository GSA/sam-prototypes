import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { SdsIconModule } from "@gsa-sam/components";

import { EntityInformationLandingRoutingModule } from "./entity-information-landing-routing.module";
import { EntityInformationLandingComponent } from "./entity-information-landing.component";
import { SplashTileComponent } from "./splash-tile.component";
import { SplashAlertComponent } from "./splash-alert.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [
    EntityInformationLandingComponent,
    SplashTileComponent,
    SplashAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    EntityInformationLandingRoutingModule,
    SdsIconModule,
    SharedModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [EntityInformationLandingComponent, SplashAlertComponent],
})
export class EntityInformationLandingModule {}
