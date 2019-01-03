import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesHomeRoutingModule } from './entities-home-routing.module';
import { EntitiesHomeComponent } from './entities-home.component';
import { SamFeatureBannerModule } from '../../sam-ui-elements/sam-feature-banner/sam-feature-banner.module';
import { SamSearchInputModule } from '../../sam-ui-elements/sam-search-input/sam-search-input.module';

@NgModule({
  imports: [
    CommonModule,
    SamFeatureBannerModule,
    SamSearchInputModule,
    EntitiesHomeRoutingModule
  ],
  declarations: [EntitiesHomeComponent]
})
export class EntitiesHomeModule { }
