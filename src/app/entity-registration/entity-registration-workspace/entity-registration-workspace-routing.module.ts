import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationWorkspaceComponent } from './entity-registration-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationWorkspaceRoutingModule { }
