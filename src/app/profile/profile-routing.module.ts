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
				redirectTo: 'account-details',
				pathMatch: 'full'
			},
			{
				path: 'account-details',
				loadChildren: () => import('./account-details/account-details.module').then(m => m.AccountDetailsModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'roles',
				loadChildren: () => import('./account-roles/account-roles.module').then(m=> m.AccountRolesModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'history',
				loadChildren: () => import('./account-history/account-history.module').then(m => m.AccountHistoryModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'email-settings',
				loadChildren: () => import('./account-email-settings/account-email-settings.module').then(m => m.AccountEmailSettingsModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'following',
				loadChildren: () => import('./account-following/account-following.module').then(m => m.AccountFollowingModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'data-services',
				loadChildren: () => import('./account-data-services/account-data-services.module').then(m => m.AccountDataServicesModule),
				data: {
					id: "workspace"
				}
			},
			{
				path: 'downloads',
				loadChildren: () => import('./account-downloads/account-downloads.module').then(m => m.AccountDownloadsModule),
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
