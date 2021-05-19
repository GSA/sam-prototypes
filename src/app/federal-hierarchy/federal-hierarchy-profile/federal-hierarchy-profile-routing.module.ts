import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyProfileComponent } from './federal-hierarchy-profile.component';

const routes: Routes = [
	{
		path: ':id',
		component: FederalHierarchyProfileComponent,
		children: [
			{
				path: '',
				loadChildren: () => import("./federal-hierarchy-details/federal-hierarchy-details.module").then((m) => m.FederalHierarchyDetailsModule)
			},
			{
				path: 'history',
				loadChildren: () => import("./federal-hierarchy-history/federal-hierarchy-history.module").then((m) => m.FederalHierarchyHistoryModule)
			},
			{
				path: 'settings',
				loadChildren: () => import("./federal-hierarchy-settings/federal-hierarchy-settings.module").then((m) => m.FederalHierarchySettingsModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyProfileRoutingModule { }