import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SdsCollapseModule } from '@gsa-sam/components';

import { SiteMapRoutingModule } from './site-map-routing.module';
import { SiteMapComponent } from './site-map.component';

@NgModule({
  declarations: [SiteMapComponent],
  imports: [
    CommonModule,
    SdsCollapseModule,
    SiteMapRoutingModule
  ],
  exports: [SiteMapComponent]
})
export class SiteMapModule { }
