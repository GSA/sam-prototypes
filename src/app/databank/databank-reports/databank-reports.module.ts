import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankReportsRoutingModule } from './databank-reports-routing.module';
import { DatabankReportsComponent } from './databank-reports.component';

@NgModule({
  imports: [
    CommonModule,
    DatabankReportsRoutingModule
  ],
  declarations: [DatabankReportsComponent]
})
export class DatabankReportsModule { }
