import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationLandingComponent } from './entity-registration-landing.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationLandingComponent
	},
	{
		path: 'check-status',
		loadChildren: './check-status/check-status.module#CheckStatusModule',
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationLandingRoutingModule { }
