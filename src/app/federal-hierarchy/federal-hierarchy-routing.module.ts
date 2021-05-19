import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FederalHierarchyComponent } from './federal-hierarchy.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyComponent
	},
	{
		path: 'profile',
		loadChildren: () => import("./federal-hierarchy-profile/federal-hierarchy-profile.module").then((m) => m.FederalHierarchyProfileModule),
		data: {
      		id: "search",
    	}
	},
	{
		path: 'editor',
		loadChildren: () => import("./federal-hierarchy-editor/federal-hierarchy-editor.module").then((m) => m.FederalHierarchyEditorModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyRoutingModule { }
