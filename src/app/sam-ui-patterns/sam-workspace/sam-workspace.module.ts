import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamWorkspaceRoutingModule } from './sam-workspace-routing.module';
import { SamWorkspaceComponent } from './sam-workspace.component';

@NgModule({
  imports: [
    CommonModule,
    SamWorkspaceRoutingModule
  ],
  declarations: [SamWorkspaceComponent]
})
export class SamWorkspaceModule { }
