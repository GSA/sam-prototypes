import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SdsAutocompleteModule } from "@gsa-sam/components";
import { SdsTableModule } from "@gsa-sam/sam-material-extensions";

import { HierarchyServiceModule } from "../../services/hierarchy-service/hierarchy-service.module";
import { HierarchyNavPickerComponent } from "./hierarchy-nav-picker.component";

@NgModule({
  declarations: [HierarchyNavPickerComponent],
  imports: [
    CommonModule,

    FormsModule,
    SdsAutocompleteModule,
    SdsTableModule,
    HierarchyServiceModule,
  ],
  exports: [HierarchyNavPickerComponent],
})
export class HierarchyNavPickerModule {}
