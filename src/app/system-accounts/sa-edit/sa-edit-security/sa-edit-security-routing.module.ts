import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaEditSecurityComponent } from './sa-edit-security.component';

const routes: Routes = [
	{
		path: '',
		component: SaEditSecurityComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaEditSecurityRoutingModule { }
