import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankSearchComponent } from './databank-search.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankSearchComponent
	}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankSearchRoutingModule { }
