import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationPreviewComponent } from './entity-registration-preview.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationPreviewComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationPreviewRoutingModule { }
