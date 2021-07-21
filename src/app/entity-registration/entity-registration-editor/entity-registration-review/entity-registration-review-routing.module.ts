import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationReviewComponent } from './entity-registration-review.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationReviewComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationReviewRoutingModule { }
