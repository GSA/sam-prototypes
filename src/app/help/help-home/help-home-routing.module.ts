import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpHomeComponent } from './help-home.component';

const routes: Routes = [
	{
		path: '',
		component: HelpHomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpHomeRoutingModule { }
