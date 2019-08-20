import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgencyPickerModule } from './agency-picker/agency-picker.module';
import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';
import { SdsAutocompleteModule } from '@gsa-sam/components'
import { HierarchyService } from './service/hierarchy.service';
import { AgencyPickerService } from './service/agency-picker-service';
@NgModule({
  declarations: [HierarchyComponent],
  imports: [
    CommonModule,
    FormsModule,
    HierarchyRoutingModule,
    SdsAutocompleteModule,
    AgencyPickerModule
  ],
  providers: [AgencyPickerService, HierarchyService],
  exports: [HierarchyComponent]
})
export class HierarchyModule { }
