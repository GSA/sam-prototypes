import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HierarchyLandingComponent } from './hierarchy-landing.component';

const routes: Routes = [
	{
		path: '',
		component: HierarchyLandingComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchyLandingRoutingModule { }
