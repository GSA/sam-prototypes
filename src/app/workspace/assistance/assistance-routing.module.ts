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
				component: AssistanceDashboardComponent,
				data: {
					sideId: 'federalAssistance'
				}
			},
			{
				path: 'assistancelist',
				component: AssistanceComponent,
				data: {
					sideId: 'assistancelist'
				}
			},
			{
				path: 'cfdanumber',
				component: CfdanumberComponent,
				data: {
					sideId: 'cfdanumber'
				}
			},
			{
				path: 'regionallocation',
				component: RegionallocationComponent,
				data: {
					sideId: 'regionallocation'
				}
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
