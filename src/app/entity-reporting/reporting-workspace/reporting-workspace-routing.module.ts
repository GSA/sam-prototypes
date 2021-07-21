import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingWorkspaceComponent } from './reporting-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: ReportingWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingWorkspaceRoutingModule { }
