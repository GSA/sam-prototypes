import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityExclusionsComponent } from './entity-exclusions.component';

const routes: Routes = [
	{
		path: '',
		component: EntityExclusionsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityExclusionsRoutingModule { }
