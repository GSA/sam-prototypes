import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractingResourcesComponent } from './contracting.component';

const routes: Routes = [
	{
		path: '',
		component: ContractingResourcesComponent 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractingResourcesRoutingModule { }
