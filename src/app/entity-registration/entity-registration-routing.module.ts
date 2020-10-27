import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'register',
		loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    	data: {
    		id: 'workspace'
    	}
    },
    {
	    path: 'view',
	    loadChildren: () => import('./entity-registration-display/entity-registration-display.module').then(m => m.EntityRegistrationDisplayModule),
	    data: {
	      id: "search"
	    }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationRoutingModule { }