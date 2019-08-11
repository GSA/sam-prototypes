import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FsdComponent } from './fsd.component';

const routes: Routes = [
	{
		path: '',
		component: FsdComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FsdRoutingModule { }
