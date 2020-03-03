import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountsWorkspaceModule } from './system-accounts-workspace/system-accounts-workspace.module';
import { SystemAccountModule } from './system-account/system-account.module';

const routes: Routes = [
	{
		path: '',
		loadChildren: './system-accounts-workspace/system-accounts-workspace.module#SystemAccountsWorkspaceModule'
	},
	{
		path: 'account-detail',
		loadChildren: './system-account/system-account.module#SystemAccountModule'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountsRoutingModule { }
