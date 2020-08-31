import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const routes: Routes = [

	{
	    path: '',
	    loadChildren: () => import('./help-home/help-home.module').then(m => m.HelpHomeModule),
	    data: {
	      id: "help"
	    }
	},
	{
		path: 'results',
		component: HelpComponent
	},
	{
		path: ':id',
	    loadChildren: () => import('./help-page/help-page.module').then(m => m.HelpPageModule),
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
