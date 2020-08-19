import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRolesComponent } from './account-roles.component';

const routes: Routes = [
	{
		path: '',
		component: AccountRolesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRolesRoutingModule { }
