import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
