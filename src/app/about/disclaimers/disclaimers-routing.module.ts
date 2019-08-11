import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisclaimersComponent } from './disclaimers.component';

const routes: Routes = [
	{
		path: '',
		component: DisclaimersComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisclaimersRoutingModule { }
