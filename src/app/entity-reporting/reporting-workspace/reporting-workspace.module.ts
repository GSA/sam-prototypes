import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingWorkspaceRoutingModule } from './reporting-workspace-routing.module';
import { ReportingWorkspaceComponent } from './reporting-workspace.component';


@NgModule({
  declarations: [ReportingWorkspaceComponent],
  imports: [
    CommonModule,
    ReportingWorkspaceRoutingModule
  ],
  exports: [ReportingWorkspaceComponent]
})
export class ReportingWorkspaceModule { }
