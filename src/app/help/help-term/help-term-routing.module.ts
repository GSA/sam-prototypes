import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpTermComponent } from './help-term.component';

const routes: Routes = [
	{
		path: '',
		component: HelpTermComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpTermRoutingModule { }
