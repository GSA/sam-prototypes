import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisasterResponseComponent } from './disaster-response.component';

const routes: Routes = [
	{
		path: '',
		component: DisasterResponseComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisasterResponseRoutingModule { }
