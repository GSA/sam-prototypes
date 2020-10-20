import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationLandingEntityComponent } from './registration-landing-entity.component';

const routes: Routes = [
	{
		path: '',
		component: RegistrationLandingEntityComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationLandingEntityRoutingModule { }
