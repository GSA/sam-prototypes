import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistanceResourcesComponent } from './assistance.component';

const routes: Routes = [
	{
		path: '',
		component: AssistanceResourcesComponent
	}
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      AssistanceResourcesComponent
  ],
  exports: [RouterModule]
})
export class AssistanceResourcesRoutingModule { }
