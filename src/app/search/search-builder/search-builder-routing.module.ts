import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBuilderComponent } from './search-builder.component';

const routes: Routes = [
	{
		path: '',
		component: SearchBuilderComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBuilderRoutingModule { }
