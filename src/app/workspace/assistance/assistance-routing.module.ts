import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistanceDashboardComponent } from './assistance-dashboard.component';
import { AssistanceComponent } from './assistance.component';
import { CfdanumberComponent } from './cfdanumber.component';
import { RegionallocationComponent } from './regionallocation.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'dashboard'
			},
			{
				path: 'dashboard',
				component: AssistanceDashboardComponent
			},
			{
				path: 'assistancelist',
				component: AssistanceComponent
			},
			{
				path: 'cfdanumber',
				component: CfdanumberComponent
			},
			{
				path: 'regionallocation',
				component: RegionallocationComponent
			},
			{
				path: '**',
				redirectTo: 'dashboard'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule { }
