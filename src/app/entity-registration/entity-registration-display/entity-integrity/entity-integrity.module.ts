import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityIntegrityRoutingModule } from './entity-integrity-routing.module';
import { EntityIntegrityComponent } from './entity-integrity.component';

@NgModule({
  declarations: [EntityIntegrityComponent],
  imports: [
    CommonModule,
    EntityIntegrityRoutingModule
  ],
  exports: [EntityIntegrityComponent]
})
export class EntityIntegrityModule { }
