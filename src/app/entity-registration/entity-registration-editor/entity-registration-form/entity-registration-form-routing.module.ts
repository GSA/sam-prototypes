import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationFormComponent } from './entity-registration-form.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationFormRoutingModule { }
