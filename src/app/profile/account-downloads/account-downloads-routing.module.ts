import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDownloadsComponent } from './account-downloads.component';

const routes: Routes = [
	{
		path: '',
		component: AccountDownloadsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDownloadsRoutingModule { }
