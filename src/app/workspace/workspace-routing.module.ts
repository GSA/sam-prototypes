import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { PublicWorkspaceComponent } from './public-workspace.component';
// import { WorkspaceGuard } from './workspace-guard';

const routes: Routes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard'
			},
			{
				path: 'dashboard',
				loadChildren: './dashboard/dashboard.module#DashboardModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'contractopportunities',
				loadChildren: './opportunities/opportunities.module#OpportunitiesModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'contractdata',
				loadChildren: './contractdata/contractdata.module#ContractdataModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'fal',
				loadChildren: './assistance/assistance.module#AssistanceModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'registrations',
				loadChildren: './entities/entities.module#EntitiesModule',
				data: {
					sideId: 'registrations'
				}
			},
			{
				path: 'exclusions',
				loadChildren: './exclusions/exclusions.module#ExclusionsModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'integrity',
				loadChildren: './integrity/integrity.module#IntegrityModule',
				data: {
					sideId: ''
				}

			},
			{
				path: 'profile',
				loadChildren: './profile/profile.module#ProfileModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'customerservice',
				loadChildren: './customer-service/customer-service.module#CustomerServiceModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'reset',
				loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
				data: {
					sideId: ''
				}
			},
			{
				path: 'roles',
				loadChildren: './user-roles/user-roles.module#UserRolesModule',
				data: {
					sideId: ''
				}
			},
			{
				path: '**',
				redirectTo: 'dashboard'
			}
		]
	}
	//,
	// {
	// 	path: 'public',
	// 	component: PublicWorkspaceComponent
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
