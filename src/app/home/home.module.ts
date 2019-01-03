import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamFeatureBannerModule } from '../sam-ui-elements/sam-feature-banner/sam-feature-banner.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SamSearchInputModule } from '../sam-ui-elements/sam-search-input/sam-search-input.module';

@NgModule({
  imports: [
    CommonModule,
    SamFeatureBannerModule,
    SamSearchInputModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
