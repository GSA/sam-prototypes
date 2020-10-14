import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExclusionsFederalComponent } from './exclusions-federal.component';

const routes: Routes = [
	{
		path: '',
		component: ExclusionsFederalComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExclusionsFederalRoutingModule { }
