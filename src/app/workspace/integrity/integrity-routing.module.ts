import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrityComponent } from './integrity.component';

const routes: Routes = [
	{
		path: '',
		component: IntegrityComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityRoutingModule { }
