import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';

@NgModule({
  declarations: [PerformanceComponent],
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ],
  exports: [PerformanceComponent]
})
export class PerformanceModule { }
