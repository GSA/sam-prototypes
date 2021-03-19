import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule
} from '@gsa-sam/components';


import { SharedModule } from '../landing/shared/shared.module';
import { KnowledgeServicesModule } from '../services/knowledge-services/knowledge-services.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSealComponent } from './home-seal/home-seal.component';
import { HomeLogoComponent } from './home-logo/home-logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    SdsSubheaderModule,
    KnowledgeServicesModule,
    SharedModule,
    HomeRoutingModule,
    SdsIconModule
  ],
  declarations: [HomeComponent, HomeSealComponent, HomeLogoComponent],
  exports: [HomeSealComponent, HomeLogoComponent]
})
export class HomeModule { }
