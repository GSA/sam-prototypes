import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyOfficeComponent } from './federal-hierarchy-office-component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyOfficeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyOfficeRoutingModule { }
