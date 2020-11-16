import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankReportComponent } from './databank-report.component';

const routes: Routes = [
	{
		path: ':id',
		component: DatabankReportComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankReportRoutingModule { }
