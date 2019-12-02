import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountComponent } from './system-account.component';

const routes: Routes = [
	{
		path: '',
		component: SystemAccountComponent,
		children: [
			{
				path: 'review',
				loadChildren: './sa-review/sa-review.module#SaReviewModule'
			},
			{
				path: 'info',
				loadChildren: './sa-edit-details/sa-edit-details.module#SaEditDetailsModule'
			},
			{
				path: 'organization',
				loadChildren: './sa-edit-organization/sa-edit-organization.module#SaEditOrganizationModule'
			},
			{
				path: 'permissions',
				loadChildren: './sa-edit-permissions/sa-edit-permissions.module#SaEditPermissionsModule'
			},
			{
				path: 'security',
				loadChildren: './sa-edit-security/sa-edit-security.module#SaEditSecurityModule'
			},
			{
				path: 'auth',
				loadChildren: './sa-edit-auth/sa-edit-auth.module#SaEditAuthModule'
			}

		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountRoutingModule { }
