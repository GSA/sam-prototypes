import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractdataComponent } from './contractdata.component';

const routes: Routes = [
	{
		path: '',
		component: ContractdataComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractdataRoutingModule { }
