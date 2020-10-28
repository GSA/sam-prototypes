import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityIntegrityComponent } from './entity-integrity.component';

const routes: Routes = [
	{
		path: '',
		component: EntityIntegrityComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityIntegrityRoutingModule { }
