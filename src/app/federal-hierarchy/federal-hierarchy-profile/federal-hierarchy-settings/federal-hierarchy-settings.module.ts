import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FederalHierarchySettingsRoutingModule } from './federal-hierarchy-settings-routing.module';
import { FederalHierarchySettingsComponent } from './federal-hierarchy-settings.component';


@NgModule({
  declarations: [FederalHierarchySettingsComponent],
  imports: [
    CommonModule,
    FederalHierarchySettingsRoutingModule
  ],
  exports: [FederalHierarchySettingsComponent]
})
export class FederalHierarchySettingsModule { }
