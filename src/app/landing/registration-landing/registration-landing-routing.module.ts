import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationLandingComponent } from './registration-landing.component';

const routes: Routes = [
	{
		path: '',
		component: RegistrationLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationLandingRoutingModule { }
