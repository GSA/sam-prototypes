import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpSearchComponent } from './help-search.component';

const routes: Routes = [
	{
		path: '',
		component: HelpSearchComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpSearchRoutingModule { }
