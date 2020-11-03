import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankComponent } from './databank.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankComponent
	},
	{
		path: 'databank-schedule',
		loadChildren: () => import('./databank-scheduled-reports/databank-scheduled-reports.module').then(m => m.DatabankScheduledReportsModule)
	},
	{
		path: 'databank-search',
		loadChildren: () => import('./databank-search/databank-search.module').then(m => m.DatabankSearchModule)
	},
	{
		path: 'databank-history',
		loadChildren: () => import('./databank-history/databank-history.module').then(m => m.DatabankHistoryModule)
	},
	{
	    path: 'report',
	    loadChildren: () => import('./databank-report/databank-report.module').then(m => m.DatabankReportModule)
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankRoutingModule { }
