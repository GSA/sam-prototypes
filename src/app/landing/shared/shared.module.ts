import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';


import { MatExpansionModule } from '@angular/material/expansion';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

import { LandingSearchComponent } from './landing-search/landing-search.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { LandingTileComponent } from './landing-tile/landing-tile.component';
import { LandingAlertComponent } from './landing-alert/landing-alert.component';
import { LandingBaseComponent } from './landing-base/landing-base.component';
import { LandingAccordionComponent } from './landing-accordion/landing-accordion.component';
import { LandingListComponent } from './landing-list/landing-list.component';

@NgModule({
  declarations: [LandingSearchComponent, LandingHeroComponent, LandingTileComponent, LandingAlertComponent, LandingBaseComponent, LandingAccordionComponent, LandingListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    MatExpansionModule,
    SdsAccordionModule,
    ReactiveFormsModule,
    SdsFormlyModule
  ],
  exports: [LandingSearchComponent, LandingHeroComponent, LandingTileComponent, LandingAlertComponent, LandingBaseComponent, LandingAccordionComponent, LandingListComponent]
})
export class SharedModule { }
