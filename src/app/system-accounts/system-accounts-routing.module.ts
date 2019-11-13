import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountsComponent } from './system-accounts.component';

const routes: Routes = [
	{
		path: '',
		component: SystemAccountsComponent,
		children: [
			{
				path: 'edit',
				loadChildren: './sa-edit/sa-edit.module#SaEditModule'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountsRoutingModule { }
