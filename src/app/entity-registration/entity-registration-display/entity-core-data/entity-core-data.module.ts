import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from '../../../app-layout/app-layout.module';
import { ComponentsModule } from '../../../components/components.module';

import { EntityCoreDataRoutingModule } from './entity-core-data-routing.module';
import { EntityCoreDataComponent } from './entity-core-data.component';

@NgModule({
  declarations: [EntityCoreDataComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    ComponentsModule,
    EntityCoreDataRoutingModule
  ],
  exports: [EntityCoreDataComponent]
})
export class EntityCoreDataModule { }
