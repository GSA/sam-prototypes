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
				redirectTo: 'dashboard',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'dashboard',
				loadChildren: './dashboard/dashboard.module#DashboardModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'contractopportunities',
				loadChildren: './opportunities/opportunities.module#OpportunitiesModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'contractdata',
				loadChildren: './contractdata/contractdata.module#ContractdataModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'fal',
				loadChildren: './assistance/assistance.module#AssistanceModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'registrations',
				loadChildren: './entities/entities.module#EntitiesModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'exclusions',
				loadChildren: './exclusions/exclusions.module#ExclusionsModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'integrity',
				loadChildren: './integrity/integrity.module#IntegrityModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'profile',
				loadChildren: './profile/profile.module#ProfileModule',
				data: {
				  id: "workspace"
				}
			},
			{
				path: 'customerservice',
				loadChildren: './customer-service/customer-service.module#CustomerServiceModule'
			},
			{
				path: 'reset',
				loadChildren: './reset-password/reset-password.module#ResetPasswordModule'
			},
			{
				path: 'roles',
				loadChildren: './user-roles/user-roles.module#UserRolesModule'
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
