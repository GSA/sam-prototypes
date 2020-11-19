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

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    SdsSubheaderModule,
    HomeRoutingModule,
    SdsIconModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
