import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityReportingDisplayRoutingModule } from './entity-reporting-display-routing.module';
import { EntityReportingDisplayComponent } from './entity-reporting-display.component';


@NgModule({
  declarations: [EntityReportingDisplayComponent],
  imports: [
    CommonModule,
    EntityReportingDisplayRoutingModule
  ],
  exports: [EntityReportingDisplayComponent]
})
export class EntityReportingDisplayModule { }
