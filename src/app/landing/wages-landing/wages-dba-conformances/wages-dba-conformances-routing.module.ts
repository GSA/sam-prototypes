import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesDbaConformancesComponent } from './wages-dba-conformances.component';

const routes: Routes = [
	{
		path: '',
		component: WagesDbaConformancesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesDbaConformancesRoutingModule { }
