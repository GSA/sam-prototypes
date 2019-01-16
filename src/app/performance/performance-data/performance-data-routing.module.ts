import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceDataComponent } from './performance-data.component';

const routes: Routes = [
	{
		path: ':id',
		component: PerformanceDataComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceDataRoutingModule { }
