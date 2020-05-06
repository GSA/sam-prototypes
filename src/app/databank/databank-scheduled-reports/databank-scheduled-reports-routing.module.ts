import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankScheduledReportsComponent } from './databank-scheduled-reports.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankScheduledReportsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankScheduledReportsRoutingModule { }
