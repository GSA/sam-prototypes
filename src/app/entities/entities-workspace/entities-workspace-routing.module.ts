import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesListComponent } from './entities-list/entities-list.component';

const routes: Routes = [
	{
		path: '',
		component: EntitiesListComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesWorkspaceRoutingModule { }
