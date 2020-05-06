import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankScheduledReportsRoutingModule } from './databank-scheduled-reports-routing.module';
import { DatabankScheduledReportsComponent } from './databank-scheduled-reports.component';

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    DatabankScheduledReportsRoutingModule
  ],
  exports: [DatabankScheduledReportsComponent]
})
export class DatabankScheduledReportsModule { }
