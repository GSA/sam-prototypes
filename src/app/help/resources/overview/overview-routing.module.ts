import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewResourcesComponent } from './overview.component';

const routes: Routes = [
	{
		path: '',
		component: OverviewResourcesComponent 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewResourcesRoutingModule { }
