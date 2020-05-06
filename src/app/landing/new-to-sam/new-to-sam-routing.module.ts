import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewToSamComponent } from './new-to-sam.component';

const routes: Routes = [
	{
		path: '',
		component: NewToSamComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewToSamRoutingModule { }
