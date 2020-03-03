import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountsWorkspaceComponent } from './system-accounts-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: SystemAccountsWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountsWorkspaceRoutingModule { }
