import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianceLandingComponent } from './compliance-landing.component';

const routes: Routes = [
	{
		path: '',
		component: ComplianceLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceLandingRoutingModule { }
