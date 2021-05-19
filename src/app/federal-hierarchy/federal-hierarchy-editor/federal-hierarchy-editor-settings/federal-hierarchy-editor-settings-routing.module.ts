import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyEditorSettingsComponent } from './federal-hierarchy-editor-settings.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyEditorSettingsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyEditorSettingsRoutingModule { }
