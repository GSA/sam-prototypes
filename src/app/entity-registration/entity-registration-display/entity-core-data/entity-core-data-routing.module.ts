import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityCoreDataComponent } from './entity-core-data.component';

const routes: Routes = [
	{
		path: '',
		component: EntityCoreDataComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityCoreDataRoutingModule { }
