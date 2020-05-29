import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistancelistComponent } from './assistancelist.component';

const routes: Routes = [
	{
		path: '',
		component: AssistancelistComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistancelistRoutingModule { }
