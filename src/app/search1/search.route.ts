import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';


export const SEARCH_COMPONENTS = [
    SearchComponent,
    SearchFiltersComponent
];

export const SEARCH_ROUTES: Routes = [
  {
    path: 'search', component: SearchComponent,
    children: [{
      path: 'list', component: SearchComponent
    },
    ],
  }
];

