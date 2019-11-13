import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesLandingComponent } from './wages-landing.component';

const routes: Routes = [
	{
		path: '',
		component: WagesLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesLandingRoutingModule { }
