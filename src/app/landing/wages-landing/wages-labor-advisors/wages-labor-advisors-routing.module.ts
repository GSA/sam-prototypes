import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesLaborAdvisorsComponent } from './wages-labor-advisors.component';

const routes: Routes = [
	{
		path: '',
		component: WagesLaborAdvisorsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesLaborAdvisorsRoutingModule { }
