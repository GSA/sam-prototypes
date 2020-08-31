import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbaTobeRevisedComponent } from './dba-tobe-revised.component';

const routes: Routes = [
	{
		path: '',
		component: DbaTobeRevisedComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbaTobeRevisedRoutingModule { }
