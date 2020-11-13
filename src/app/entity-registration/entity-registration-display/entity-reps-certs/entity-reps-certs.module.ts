import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRepsCertsRoutingModule } from './entity-reps-certs-routing.module';
import { EntityRepsCertsComponent } from './entity-reps-certs.component';

@NgModule({
  declarations: [EntityRepsCertsComponent],
  imports: [
    CommonModule,
    EntityRepsCertsRoutingModule
  ],
  exports: [EntityRepsCertsComponent]
})
export class EntityRepsCertsModule { }
