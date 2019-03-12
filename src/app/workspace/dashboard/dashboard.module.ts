import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SamCardModule } from '../../sam-ui-elements/sam-card/sam-card.module';
import { SamSegmentModule } from '../../sam-ui-elements/sam-segment/sam-segment.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    SamCardModule,
    SamSegmentModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
