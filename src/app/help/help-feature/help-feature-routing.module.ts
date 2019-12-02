import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpFeatureComponent } from './help-feature.component';

const routes: Routes = [
	{
		path: '',
		component: HelpFeatureComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpFeatureRoutingModule { }
