import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeAltComponent } from './home-alt.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    HomeRoutingModule
  ],
  declarations: [HomeAltComponent]
})
export class HomeAltModule { }
