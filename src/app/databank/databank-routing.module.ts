import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankComponent } from './databank.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankComponent,
			children: [
				{
					path: 'databank-schedule',
					loadChildren: './databank-scheduled-reports/databank-scheduled-reports.module#DatabankScheduledReportsModule'
				},
				{
					path: 'databank-search',
					loadChildren: './databank-search/databank-search.module#DatabankSearchModule'
				},
				{
					path: 'databank-history',
					loadChildren: './databank-history/databank-history.module#DatabankHistoryModule'
				},
				{
					path: '',
					loadChildren: './databank-reports/databank-reports.module#DatabankReportsModule'
				}

			]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankRoutingModule { }
