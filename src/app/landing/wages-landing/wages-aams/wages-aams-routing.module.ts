import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesAamsComponent } from './wages-aams.component';

const routes: Routes = [
	{
		path: '',
		component: WagesAamsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesAamsRoutingModule { }
