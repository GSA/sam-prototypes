import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { SdsIconModule } from "@gsa-sam/components";

import { MatExpansionModule } from "@angular/material/expansion";
import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { LandingSearchComponent } from "./landing-search/landing-search.component";
import { LandingHeroComponent } from "./landing-hero/landing-hero.component";
import {
  LandingTileComponent,
  LandingTileDirective,
} from "./landing-tile/landing-tile.component";
import { LandingAlertComponent } from "./landing-alert/landing-alert.component";
import { LandingBaseComponent } from "./landing-base/landing-base.component";
import { LandingAccordionComponent } from "./landing-accordion/landing-accordion.component";
import { LandingListComponent } from "./landing-list/landing-list.component";
import { LandingCardComponent } from "./landing-card/landing-card.component";
import { LandingFeedComponent } from "./landing-feed/landing-feed.component";
import { NavigateComponent } from "./navigate/navigate.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [
    LandingSearchComponent,
    LandingHeroComponent,
    LandingTileDirective,
    LandingTileComponent,
    LandingAlertComponent,
    LandingBaseComponent,
    LandingAccordionComponent,
    LandingListComponent,
    LandingCardComponent,
    LandingFeedComponent,
    NavigateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    MatExpansionModule,
    SdsAccordionModule,
    SdsIconModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  exports: [
    LandingSearchComponent,
    LandingHeroComponent,
    LandingTileDirective,
    LandingTileComponent,
    LandingAlertComponent,
    LandingBaseComponent,
    LandingAccordionComponent,
    LandingListComponent,
    LandingCardComponent,
    LandingFeedComponent,
    NavigateComponent,
  ],
})
export class SharedModule {}
