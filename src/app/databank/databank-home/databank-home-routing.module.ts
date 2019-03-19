import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticated } from '../../security/is-authenticated';
import { DatabankHomeComponent } from './databank-home.component';

const routes: Routes = [
	{
		path: '',
		component: DatabankHomeComponent,
		canActivate: [IsAuthenticated]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankHomeRoutingModule { }
