import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';


const routes: Routes = [
	{
		path: '',
		component: SearchComponent,
			children: [
				{
					path: 'saved-search',
					loadChildren: './search-save/search-save.module#SearchSaveModule'
				},
				{
					path: 'results',
					loadChildren: './search-home/search-home.module#SearchHomeModule'
				}

			]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
