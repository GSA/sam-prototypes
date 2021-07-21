import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchySettingsComponent } from './federal-hierarchy-settings.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchySettingsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchySettingsRoutingModule { }
