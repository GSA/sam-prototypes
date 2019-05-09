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
				loadChildren: './dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'contractopportunities',
				loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
			},
			{
				path: 'contractdata',
				loadChildren: './contractdata/contractdata.module#ContractdataModule'
			},
			{
				path: 'fal',
				loadChildren: './assistance/assistance.module#AssistanceModule'
			},
			{
				path: 'registrations',
				loadChildren: './entities/entities.module#EntitiesModule'
			},
			{
				path: 'exclusions',
				loadChildren: './exclusions/exclusions.module#ExclusionsModule'
			},
			{
				path: 'integrity',
				loadChildren: './integrity/integrity.module#IntegrityModule'
			},
			{
				path: 'profile',
				loadChildren: './profile/profile.module#ProfileModule'
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
	},
	{
		path: 'public',
		component: PublicWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
