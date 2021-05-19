import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyEditorHistoryComponent } from './federal-hierarchy-editor-history.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyEditorHistoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyEditorHistoryRoutingModule { }
