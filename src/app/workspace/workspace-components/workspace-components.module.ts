import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkspaceCardComponent } from './workspace-card.component';
import { WorkspaceStatisticComponent } from './workspace-statistic.component';



@NgModule({
  declarations: [WorkspaceCardComponent, WorkspaceStatisticComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WorkspaceCardComponent, WorkspaceStatisticComponent]
})
export class WorkspaceComponentsModule { }
