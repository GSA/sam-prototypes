import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchyEditorSettingsRoutingModule } from './federal-hierarchy-editor-settings-routing.module';
import { FederalHierarchyEditorSettingsComponent } from './federal-hierarchy-editor-settings.component';


@NgModule({
  declarations: [FederalHierarchyEditorSettingsComponent],
  imports: [
    CommonModule,
    FederalHierarchyEditorSettingsRoutingModule
  ],
  exports: [FederalHierarchyEditorSettingsComponent]
})
export class FederalHierarchyEditorSettingsModule { }
