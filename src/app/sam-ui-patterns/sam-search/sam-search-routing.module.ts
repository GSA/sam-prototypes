import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamSearchComponent } from './sam-search.component';

const routes: Routes = [
	{
		path: '',
		component: SamSearchComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamSearchRoutingModule { }