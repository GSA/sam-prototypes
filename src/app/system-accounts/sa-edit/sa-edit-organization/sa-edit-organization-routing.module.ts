import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaEditOrganizationComponent } from './sa-edit-organization.component';

const routes: Routes = [
	{
		path: '',
		component: SaEditOrganizationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaEditOrganizationRoutingModule { }
