import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyEditorComponent } from './federal-hierarchy-editor.component';
 
const routes: Routes = [
	{
		path: ':id',
		component: FederalHierarchyEditorComponent,
		children: [
			{
				path: 'children',
				loadChildren: () => import("./federal-hierarchy-editor-children/federal-hierarchy-editor-children.module").then((m) => m.FederalHierarchyEditorChildrenModule)
			},
			{
				path: 'details',
				loadChildren: () => import("./federal-hierarchy-editor-details/federal-hierarchy-editor-details.module").then((m) => m.FederalHierarchyEditorDetailsModule)
			},
			{
				path: 'history',
				loadChildren: () => import("./federal-hierarchy-editor-history/federal-hierarchy-editor-history.module").then((m) => m.FederalHierarchyEditorHistoryModule)
			},
			{
				path: 'settings',
				loadChildren: () => import("./federal-hierarchy-editor-settings/federal-hierarchy-editor-settings.module").then((m) => m.FederalHierarchyEditorSettingsModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyEditorRoutingModule { }
