import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityHistoryDisplayComponent } from './entity-history-display.component';

const routes: Routes = [
	{
		path: '',
		component: EntityHistoryDisplayComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityHistoryDisplayRoutingModule { }
