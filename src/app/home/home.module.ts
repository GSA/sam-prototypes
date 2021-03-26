import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule,
} from "@gsa-sam/components";

import { SharedModule } from "../landing/shared/shared.module";
import { KnowledgeServicesModule } from "../services/knowledge-services/knowledge-services.module";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeSealComponent } from "./home-seal/home-seal.component";
import { HomeLogoComponent } from "./home-logo/home-logo.component";
import { HomeSplashTileComponent } from "./home-splash-tile/home-splash-tile.component";
import { HomeSearchBarComponent } from "./home-search-bar/home-search-bar.component";
import { HomeRegisterTileComponent } from "./home-register-tile/home-register-tile.component";
import { HomeHelpComponent } from "./home-help/home-help.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

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
    KnowledgeServicesModule,
    SharedModule,
    HomeRoutingModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
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
export class HomeModule {}
