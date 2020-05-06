import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusTrackerComponent } from './status-tracker.component';

const routes: Routes = [
	{
		path: '',
		component: StatusTrackerComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTrackerRoutingModule { }
