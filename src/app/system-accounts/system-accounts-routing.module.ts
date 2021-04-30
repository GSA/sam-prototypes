import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountsWorkspaceModule } from './system-accounts-workspace/system-accounts-workspace.module';
import { SystemAccountModule } from './system-account/system-account.module';

const routes: Routes = [
	{
		path: 'workspace',
		loadChildren: () => import('./system-accounts-workspace/system-accounts-workspace.module').then(m => m.SystemAccountsWorkspaceModule)
	},
	{
		path: 'profile',
		loadChildren: () => import('./system-account/system-account.module').then(m => m.SystemAccountModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountsRoutingModule { }
