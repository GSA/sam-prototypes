import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistanceLandingFederalComponent } from './assistance-landing-federal.component';

const routes: Routes = [
	{
		path: '',
		component: AssistanceLandingFederalComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceLandingFederalRoutingModule { }
