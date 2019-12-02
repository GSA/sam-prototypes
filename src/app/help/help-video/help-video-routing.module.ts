import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpVideoComponent } from './help-video.component';

const routes: Routes = [
	{
		path: '',
		component: HelpVideoComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpVideoRoutingModule { }
