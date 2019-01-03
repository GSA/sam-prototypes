import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesHomeComponent } from './entities-home.component';

const routes: Routes = [
	{
		path: '',
		component: EntitiesHomeComponent
	}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesHomeRoutingModule { }
