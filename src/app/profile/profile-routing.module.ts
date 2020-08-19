import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: '',
				redirectTo: 'account-details'
			},
			{
				path: 'account-details',
				loadChildren: './account-details/account-details.module#AccountDetailsModule',
				data: {
					id: "workspace"
				}
			},
			{
				path: 'roles',
				loadChildren: './account-roles/account-roles.module#AccountRolesModule',
				data: {
					id: "workspace"
				}
			},
			{
				path: 'history',
				loadChildren: './account-history/account-history.module#AccountHistoryModule',
				data: {
					id: "workspace"
				}
			}
		]
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
