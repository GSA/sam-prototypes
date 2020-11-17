import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLandingComponent } from './search-landing.component';

const routes: Routes = [
	{
		path: '',
		component: SearchLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchLandingRoutingModule { }
