import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyPickerModule } from './agency-picker/agency-picker.module';
import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';

@NgModule({
  declarations: [HierarchyComponent],
  imports: [
    CommonModule,
    HierarchyRoutingModule,
    AgencyPickerModule
  ],
  exports: [HierarchyComponent]
})
export class HierarchyModule { }
