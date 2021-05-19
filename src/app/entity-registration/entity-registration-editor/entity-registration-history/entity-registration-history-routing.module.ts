import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationHistoryComponent } from './entity-registration-history.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationHistoryComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationHistoryRoutingModule { }
