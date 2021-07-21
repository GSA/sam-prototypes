import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyHistoryComponent } from './federal-hierarchy-history.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyHistoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyHistoryRoutingModule { }
