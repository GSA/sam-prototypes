import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const routes: Routes = [
	{
		path: '',
	    component: HelpComponent
	},
	{
		path: ':id',
			loadChildren: './help-page/help-page.module#HelpPageModule'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
