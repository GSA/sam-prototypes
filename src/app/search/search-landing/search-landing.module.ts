import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  SdsSearchModule,
  SdsVideoPlayerModule
} from '@gsa-sam/components';

import { SearchLandingRoutingModule } from './search-landing-routing.module';
import { SearchLandingComponent } from './search-landing.component';

@NgModule({
  declarations: [SearchLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    SearchLandingRoutingModule
  ],
  exports: [SearchLandingComponent]
})
export class SearchLandingModule { }
