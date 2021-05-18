import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyEditorChildrenComponent } from './federal-hierarchy-editor-children.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyEditorChildrenComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyEditorChildrenRoutingModule { }
