import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityInformationLandingComponent } from './entity-information-landing.component';

const routes: Routes = [
	{
		path: '',
		component: EntityInformationLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityInformationLandingRoutingModule { }
