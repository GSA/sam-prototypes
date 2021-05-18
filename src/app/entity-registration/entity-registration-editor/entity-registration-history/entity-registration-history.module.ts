import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationHistoryRoutingModule } from './entity-registration-history-routing.module';
import { EntityRegistrationHistoryComponent } from './entity-registration-history.component';


@NgModule({
  declarations: [EntityRegistrationHistoryComponent],
  imports: [
    CommonModule,
    EntityRegistrationHistoryRoutingModule
  ],
  exports: [EntityRegistrationHistoryComponent]
})
export class EntityRegistrationHistoryModule { }
