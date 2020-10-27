import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';

const routes: Routes = [
	{
		path: ':id',
		component: EntityRegistrationDisplayComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationDisplayRoutingModule { }
