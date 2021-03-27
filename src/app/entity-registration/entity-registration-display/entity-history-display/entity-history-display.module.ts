import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityHistoryDisplayRoutingModule } from './entity-history-display-routing.module';
import { EntityHistoryDisplayComponent } from './entity-history-display.component';


@NgModule({
  declarations: [EntityHistoryDisplayComponent],
  imports: [
    CommonModule,
    EntityHistoryDisplayRoutingModule
  ],
  exports: [EntityHistoryDisplayComponent]
})
export class EntityHistoryDisplayModule { }
