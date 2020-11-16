import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityExclusionsRoutingModule } from './entity-exclusions-routing.module';
import { EntityExclusionsComponent } from './entity-exclusions.component';

@NgModule({
  declarations: [EntityExclusionsComponent],
  imports: [
    CommonModule,
    EntityExclusionsRoutingModule
  ],
  exports: [EntityExclusionsComponent]
})
export class EntityExclusionsModule { }
