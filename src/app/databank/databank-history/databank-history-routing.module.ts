import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankHistoryComponent } from './databank-history.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankHistoryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankHistoryRoutingModule { }
