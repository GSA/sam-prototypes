import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExclusionsComponent } from './exclusions.component';

const routes: Routes = [
	{
		path: '',
		component: ExclusionsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExclusionsRoutingModule { }
