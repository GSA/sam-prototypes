import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountComponent } from './system-account.component';

const routes: Routes = [
	{
		path: 'new',
		component: SystemAccountComponent
	},
	{
		path: ':id',
		component: SystemAccountComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountRoutingModule { }
