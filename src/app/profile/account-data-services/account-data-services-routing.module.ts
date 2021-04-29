import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDataServicesComponent } from './account-data-services.component';

const routes: Routes = [
	{
		path: '',
		component: AccountDataServicesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDataServicesRoutingModule { }
