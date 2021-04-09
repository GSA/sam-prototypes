import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEmailSettingsComponent } from './account-email-settings.component';

const routes: Routes = [
	{
		path: '',
		component: AccountEmailSettingsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountEmailSettingsRoutingModule { }
