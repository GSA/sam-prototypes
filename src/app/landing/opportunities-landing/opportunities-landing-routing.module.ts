import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunitiesLandingComponent } from './opportunities-landing.component';

const routes: Routes = [
	{
		path: '',
		component: OpportunitiesLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitiesLandingRoutingModule { }
