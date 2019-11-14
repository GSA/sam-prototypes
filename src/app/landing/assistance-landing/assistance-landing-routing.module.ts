import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistanceLandingComponent } from './assistance-landing.component';

const routes: Routes = [
	{
		path: '',
		component: AssistanceLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceLandingRoutingModule { }
