import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const routes: Routes = [
	{
		path: '',
		component: HelpComponent
	},
	{
		path: ':id',
		loadChildren: './help-video/help-video.module#HelpVideoModule' 
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
