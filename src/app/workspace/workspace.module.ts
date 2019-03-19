import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceModelModule } from './service/workspace-model.module';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    WorkspaceModelModule.forRoot()
  ],
  declarations: [WorkspaceComponent],
  exports: [WorkspaceComponent]
})
export class WorkspaceModule { }
