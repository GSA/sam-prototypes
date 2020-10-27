import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';


const routes: Routes = [	
    {
		path: '',
		component: SearchComponent
	},
	{
		path: 'saved-search',
		loadChildren: () => import('./search-save/search-save.module').then(m => m.SearchSaveModule)
	},
	{
		path: 'search-builder',
		loadChildren: () => import('./search-builder/search-builder.module').then(m => m.SearchBuilderModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
