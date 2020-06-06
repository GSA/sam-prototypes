import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalResourcesComponent } from './external-resources.component';

const routes: Routes = [
	{
		path: '',
		component: ExternalResourcesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalResourcesRoutingModule { }
