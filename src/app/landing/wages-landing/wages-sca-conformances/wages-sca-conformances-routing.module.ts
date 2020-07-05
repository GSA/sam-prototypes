import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesScaConformancesComponent } from './wages-sca-conformances.component';

const routes: Routes = [
	{
		path: '',
		component: WagesScaConformancesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesScaConformancesRoutingModule { }
