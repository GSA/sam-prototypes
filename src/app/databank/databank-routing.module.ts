import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankComponent } from './databank.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankRoutingModule { }
