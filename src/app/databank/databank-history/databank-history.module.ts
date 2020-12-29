import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { DatabankHistoryRoutingModule } from './databank-history-routing.module';
import { DatabankHistoryComponent } from './databank-history.component';

@NgModule({
  declarations: [DatabankHistoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    DatabankHistoryRoutingModule
  ],
  exports: [DatabankHistoryComponent]
})
export class DatabankHistoryModule { }
