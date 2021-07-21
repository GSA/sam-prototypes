import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRepsCertsComponent } from './entity-reps-certs.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRepsCertsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRepsCertsRoutingModule { }
