import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LandingLayoutModule } from "../../app-layout/landing-layout/landing-layout.module";

import { EntityInformationLandingRoutingModule } from "./entity-information-landing-routing.module";
import { EntityInformationLandingComponent } from "./entity-information-landing.component";
import { SplashTileComponent } from "./splash-tile.component";
import { SplashAlertComponent } from "./splash-alert.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
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
    IconModule,
    LandingLayoutModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [EntityInformationLandingComponent, SplashAlertComponent],
})
export class EntityInformationLandingModule {}
