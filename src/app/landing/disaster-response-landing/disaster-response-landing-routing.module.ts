import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisasterResponseLandingComponent } from './disaster-response-landing.component';

const routes: Routes = [
	{
		path: '',
		component: DisasterResponseLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisasterResponseLandingRoutingModule { }
