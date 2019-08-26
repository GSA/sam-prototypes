import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsToolbarModule,
    SdsPageModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    ResourcesRoutingModule
  ],
  exports: [ResourcesComponent]
})
export class ResourcesModule { }
