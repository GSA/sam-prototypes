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
			}
		]
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
