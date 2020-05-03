import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankHistoryRoutingModule } from './databank-history-routing.module';
import { DatabankHistoryComponent } from './databank-history.component';

@NgModule({
  declarations: [DatabankHistoryComponent],
  imports: [
    CommonModule,
    DatabankHistoryRoutingModule
  ],
  exports: [DatabankHistoryComponent]
})
export class DatabankHistoryModule { }
