import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityCoreDataRoutingModule } from './entity-core-data-routing.module';
import { EntityCoreDataComponent } from './entity-core-data.component';

@NgModule({
  declarations: [EntityCoreDataComponent],
  imports: [
    CommonModule,
    EntityCoreDataRoutingModule
  ],
  exports: [EntityCoreDataComponent]
})
export class EntityCoreDataModule { }
