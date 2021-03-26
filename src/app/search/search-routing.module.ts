import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';


const routes: Routes = [	
    {
		path: '',
		component: SearchComponent
	},
	{
		path: 'search-home',
		loadChildren: () => import('./search-landing/search-landing.module').then(m => m.SearchLandingModule)
	},
	{
		path: 'saved-search',
		loadChildren: () => import('./search-save/search-save.module').then(m => m.SearchSaveModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
