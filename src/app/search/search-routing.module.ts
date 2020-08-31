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
					loadChildren: () => import('./search-save/search-save.module').then(m => m.SearchSaveModule)
				},
				{
					path: 'results',
					loadChildren: () => import('./search-home/search-home.module').then(m => m.SearchHomeModule)
				}

			]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
