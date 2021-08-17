import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'workspace',
		loadChildren: () => import('./system-accounts-workspace/system-accounts-workspace.module').then(m => m.SystemAccountsWorkspaceModule)
	},
	{
		path: 'editor',
		loadChildren: () => import('./system-account-editor/system-account-editor.module').then(m => m.SystemAccountEditorModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountsRoutingModule { }
