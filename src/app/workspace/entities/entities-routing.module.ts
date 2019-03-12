import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities.component';

const routes: Routes = [
	{
		path: '',
		component: EntitiesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
