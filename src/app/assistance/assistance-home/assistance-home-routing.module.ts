import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistanceHomeComponent } from './assistance-home.component';

const routes: Routes = [
	{
		path: '',
		component: AssistanceHomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceHomeRoutingModule { }
