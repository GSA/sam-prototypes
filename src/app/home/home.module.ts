import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import {
  SdsSearchModule,
  SdsVideoPlayerModule
} from "@gsa-sam/components";

import { LandingLayoutModule } from "../app-layout/landing-layout/landing-layout.module";
import { FeedServicesModule } from "../services/feed-services/feed-services.module";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeSealComponent } from "./home-seal/home-seal.component";
import { HomeLogoComponent } from "./home-logo/home-logo.component";
import { HomeSplashTileComponent } from "./home-splash-tile/home-splash-tile.component";
import { HomeSearchBarComponent } from "./home-search-bar/home-search-bar.component";
import { HomeRegisterTileComponent } from "./home-register-tile/home-register-tile.component";
import { HomeHelpComponent } from "./home-help/home-help.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    SdsFormlyModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    SdsSubheaderModule,
    FeedServicesModule,
    LandingLayoutModule,
    HomeRoutingModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  declarations: [
    HomeComponent,
    HomeSealComponent,
    HomeLogoComponent,
    HomeSplashTileComponent,
    HomeSearchBarComponent,
    HomeRegisterTileComponent,
    HomeHelpComponent,
  ],
  exports: [
    HomeSealComponent,
    HomeLogoComponent,
    HomeSplashTileComponent,
    HomeSearchBarComponent,
    HomeRegisterTileComponent,
    HomeHelpComponent,
  ],
})
export class HomeModule { }
