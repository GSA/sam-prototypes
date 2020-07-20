import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FederalHierarchyLandingComponent } from './federal-hierarchy-landing.component';

const routes: Routes = [
	{
		path: '',
		component: FederalHierarchyLandingComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FederalHierarchyLandingRoutingModule { }
