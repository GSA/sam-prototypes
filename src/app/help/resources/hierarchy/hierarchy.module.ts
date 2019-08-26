import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';

@NgModule({
  declarations: [HierarchyComponent],
  imports: [
    CommonModule,
    HierarchyRoutingModule
  ],
  exports: [HierarchyComponent]
})
export class HierarchyModule { }
