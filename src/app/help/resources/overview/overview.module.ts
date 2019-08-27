import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewResourcesRoutingModule } from './overview-routing.module';
import { OverviewResourcesComponent } from './overview.component';

@NgModule({
  declarations: [OverviewResourcesComponent],
  imports: [
    CommonModule,
    OverviewResourcesRoutingModule
  ],
  exports: [OverviewResourcesComponent]
})
export class OverviewResourcesModule { }
