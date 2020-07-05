import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesCrossIndexComponent } from './wages-cross-index.component';

const routes: Routes = [
	{
		path: '',
		component: WagesCrossIndexComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesCrossIndexRoutingModule { }
