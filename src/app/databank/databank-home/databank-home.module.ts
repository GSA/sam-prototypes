import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabankHomeRoutingModule } from './databank-home-routing.module';
import { DatabankHomeComponent } from './databank-home.component';
import { SamFeatureBannerModule } from '../../sam-ui-elements/sam-feature-banner/sam-feature-banner.module';
import { SamSearchInputModule } from '../../sam-ui-elements/sam-search-input/sam-search-input.module';

@NgModule({
  imports: [
    CommonModule,
    DatabankHomeRoutingModule,
    SamFeatureBannerModule,
    SamSearchInputModule
  ],
  declarations: [DatabankHomeComponent]
})
export class DatabankHomeModule { }
