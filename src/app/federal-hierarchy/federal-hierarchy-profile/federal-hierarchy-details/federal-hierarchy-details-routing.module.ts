import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyDetailsComponent } from './federal-hierarchy-details.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyDetailsRoutingModule { }
