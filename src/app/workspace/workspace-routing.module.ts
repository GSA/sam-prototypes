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

				}
			},
			{
				path: 'contractopportunities',
				loadChildren: './opportunities/opportunities.module#OpportunitiesModule',
				data: {

				}
			},
			{
				path: 'contractdata',
				loadChildren: './contractdata/contractdata.module#ContractdataModule'
			},
			{
				path: 'fal',
				loadChildren: './assistance/assistance.module#AssistanceModule',
				data: {

				}
			},
			{
				path: 'registrations',
				loadChildren: './entities/entities.module#EntitiesModule',
				data: {

				}
			},
			{
				path: 'exclusions',
				loadChildren: './exclusions/exclusions.module#ExclusionsModule',
				data: {

				}
			},
			{
				path: 'integrity',
				loadChildren: './integrity/integrity.module#IntegrityModule',
				data: {

				}

			},
			{
				path: 'profile',
				loadChildren: './profile/profile.module#ProfileModule',
				data: {

				}
			},
			{
				path: 'customerservice',
				loadChildren: './customer-service/customer-service.module#CustomerServiceModule',
				data: {

				}
			},
			{
				path: 'reset',
				loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
				data: {

				}
			},
			{
				path: 'roles',
				loadChildren: './user-roles/user-roles.module#UserRolesModule',
				data: {

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
