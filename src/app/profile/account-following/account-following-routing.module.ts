import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFollowingComponent } from './account-following.component';

const routes: Routes = [
	{
		path: '',
		component: AccountFollowingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountFollowingRoutingModule { }
