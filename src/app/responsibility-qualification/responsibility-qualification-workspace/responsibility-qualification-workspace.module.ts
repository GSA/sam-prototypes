import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { WorkspaceLayoutModule } from '../../app-layout/workspace-layout/workspace-layout.module';

import { ResponsibilityQualificationWorkspaceRoutingModule } from './responsibility-qualification-workspace-routing.module';
import { ResponsibilityQualificationWorkspaceComponent } from './responsibility-qualification-workspace.component';


@NgModule({
  declarations: [ResponsibilityQualificationWorkspaceComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutModule,
    WorkspaceLayoutModule,
    ResponsibilityQualificationWorkspaceRoutingModule
  ],
  exports: [ResponsibilityQualificationWorkspaceComponent]
})
export class ResponsibilityQualificationWorkspaceModule { }
