import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const routes: Routes = [
	{
		path: '',
		component: HelpComponent,
	    children: [
			{
				path: '',
				redirectTo: 'getstarted'
			},
			{
				path: 'library',
				loadChildren: './library/library.module#LibraryModule',
				data: {
				  id: "help"
				}
			},
			{
				path: 'getstarted',
				loadChildren: './resources/resources.module#ResourcesModule',
				data: {
				  id: "help"
				}
			}
  	  ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
