import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityThreeSixtyRoutingModule } from './entity-three-sixty-routing.module';
import { EntityThreeSixtyComponent } from './entity-three-sixty.component';


@NgModule({
  declarations: [EntityThreeSixtyComponent],
  imports: [
    CommonModule,
    EntityThreeSixtyRoutingModule
  ],
  exports: [EntityThreeSixtyComponent]
})
export class EntityThreeSixtyModule { }
