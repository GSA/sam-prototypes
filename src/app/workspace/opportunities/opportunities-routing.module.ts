import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunitiesComponent } from './opportunities.component';

const routes: Routes = [
	{
		path: '',
		component: OpportunitiesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitiesRoutingModule { }
