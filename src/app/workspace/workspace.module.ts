import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SamCardModule } from '../sam-ui-elements/sam-card/sam-card.module';
import { SamSegmentModule } from '../sam-ui-elements/sam-segment/sam-segment.module';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SamCardModule,
    SamSegmentModule
  ],
  declarations: [WorkspaceComponent]
})
export class WorkspaceModule { }
