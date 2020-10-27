import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrityLandingComponent } from './integrity-landing.component';

const routes: Routes = [
	{
		path: '',
		component: IntegrityLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityLandingRoutingModule { }
