import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityAssertionsRoutingModule } from './entity-assertions-routing.module';
import { EntityAssertionsComponent } from './entity-assertions.component';

@NgModule({
  declarations: [EntityAssertionsComponent],
  imports: [
    CommonModule,
    EntityAssertionsRoutingModule
  ],
  exports: [EntityAssertionsComponent]
})
export class EntityAssertionsModule { }
