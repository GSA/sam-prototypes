import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HierarchyLandingFederalComponent } from './hierarchy-landing-federal.component';

const routes: Routes = [
	{
		path: '',
		component: HierarchyLandingFederalComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchyLandingFederalRoutingModule { }
