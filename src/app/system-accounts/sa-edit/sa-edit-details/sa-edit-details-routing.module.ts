import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaEditDetailsComponent } from './sa-edit-details.component';

const routes: Routes = [
	{
		path: '',
		component: SaEditDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaEditDetailsRoutingModule { }
