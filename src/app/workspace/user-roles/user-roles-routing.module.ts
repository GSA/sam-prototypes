import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRolesComponent } from './user-roles.component';

const routes: Routes = [
	{
		path: '',
		component: UserRolesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolesRoutingModule { }
