import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources.component';

const routes: Routes = [
	{
		path: '',
		component: ResourcesComponent,
		children: [
		    {
		    	path: '',
		    	redirectTo: 'overview'
		    },
		    {
		    	path: 'overview',
		    	loadChildren: './overview/overview.module#OverviewResourcesModule',
		    	data: {
		    		id: "help"
		    	}
		    },
			{
				path: 'contracting',
				loadChildren: './contracting/contracting.module#ContractingResourcesModule',
				data: {
				  id: "help"
				}
			},
			{
				path: 'assistance',
				loadChildren: './assistance/assistance-resources.module#AssistanceResourcesModule',
				data: {
				  id: "help"
				}
			},
			{
				path: 'registration',
				loadChildren: './registration/registration-resources.module#RegistrationResourcesModule',
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
export class ResourcesRoutingModule { }
