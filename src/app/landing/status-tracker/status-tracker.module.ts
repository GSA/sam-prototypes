import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusTrackerRoutingModule } from './status-tracker-routing.module';
import { StatusTrackerComponent } from './status-tracker.component';

@NgModule({
  declarations: [StatusTrackerComponent],
  imports: [
    CommonModule,
    StatusTrackerRoutingModule
  ],
  exports: [StatusTrackerComponent]
})
export class StatusTrackerModule { }
