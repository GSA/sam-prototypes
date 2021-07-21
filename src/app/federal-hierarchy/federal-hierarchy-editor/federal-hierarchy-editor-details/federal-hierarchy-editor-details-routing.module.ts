import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyEditorDetailsComponent } from './federal-hierarchy-editor-details.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyEditorDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyEditorDetailsRoutingModule { }
