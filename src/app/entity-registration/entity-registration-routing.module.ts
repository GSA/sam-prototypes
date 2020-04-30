import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'register',
    	loadChildren: './register/register.module#RegisterModule',
    	data: {
    		id: 'workspace'
    	}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationRoutingModule { }
