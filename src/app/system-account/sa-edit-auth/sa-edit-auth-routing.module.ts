import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaEditAuthComponent } from './sa-edit-auth.component';

const routes: Routes = [
	{
		path: '',
		component: SaEditAuthComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaEditAuthRoutingModule { }
