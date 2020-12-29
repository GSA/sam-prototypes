import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsAutocompleteModule } from '@gsa-sam/components';
import { HierarchyServiceModule } from '../../services/hierarchy-service/hierarchy-service.module';

import { HierarchyPickerComponent } from './hierarchy-picker.component';

@NgModule({
  declarations: [HierarchyPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule,
    HierarchyServiceModule
  ],
  exports: [HierarchyPickerComponent]
})
export class HierarchyPickerModule { }
