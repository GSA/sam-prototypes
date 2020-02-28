import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSaveComponent } from './search-save.component';

const routes: Routes = [
	{
	    path: '',
	    component: SearchSaveComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSaveRoutingModule { }
