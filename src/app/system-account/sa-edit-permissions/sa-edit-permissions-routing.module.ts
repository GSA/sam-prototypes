import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaEditPermissionsComponent } from './sa-edit-permissions.component';

const routes: Routes = [
	{
		path: '',
		component: SaEditPermissionsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaEditPermissionsRoutingModule { }
