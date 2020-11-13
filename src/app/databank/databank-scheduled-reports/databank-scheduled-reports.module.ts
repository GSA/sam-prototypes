import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { DatabankScheduledReportsRoutingModule } from './databank-scheduled-reports-routing.module';
import { DatabankScheduledReportsComponent } from './databank-scheduled-reports.component';

@NgModule({
  declarations: [DatabankScheduledReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    DatabankScheduledReportsRoutingModule
  ],
  exports: [DatabankScheduledReportsComponent]
})
export class DatabankScheduledReportsModule { }
