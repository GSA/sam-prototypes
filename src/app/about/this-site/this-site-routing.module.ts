import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThisSiteComponent } from './this-site.component';

const routes: Routes = [
	{
		path: '',
		component: ThisSiteComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThisSiteRoutingModule { }
