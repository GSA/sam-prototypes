import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrityDisplayComponent } from './integrity-display.component';

const routes: Routes = [
	{
		path: ':id',
		component: IntegrityDisplayComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityDisplayRoutingModule { }
