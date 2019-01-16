import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractingHomeRoutingModule } from './contracting-home-routing.module';
import { ContractingHomeComponent } from './contracting-home.component';
import { SamFeatureBannerModule } from '../../sam-ui-elements/sam-feature-banner/sam-feature-banner.module';
import { SamSearchInputModule } from '../../sam-ui-elements/sam-search-input/sam-search-input.module';

@NgModule({
  imports: [
    CommonModule,
    ContractingHomeRoutingModule,
    SamFeatureBannerModule,
    SamSearchInputModule
  ],
  declarations: [ContractingHomeComponent]
})
export class ContractingHomeModule { }
