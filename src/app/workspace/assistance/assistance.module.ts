import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import { AssistanceComponent } from './assistance.component';
import { CfdanumberComponent } from './cfdanumber.component';
import { RegionallocationComponent } from './regionallocation.component';
import { AssistanceDashboardComponent } from './assistance-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AssistanceRoutingModule
  ],
  declarations: [AssistanceComponent, CfdanumberComponent, RegionallocationComponent, AssistanceDashboardComponent],
  exports: [AssistanceComponent, CfdanumberComponent, RegionallocationComponent, AssistanceDashboardComponent]
})
export class AssistanceModule { }
