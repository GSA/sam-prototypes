import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractDataLandingComponent } from './contract-data-landing.component';

const routes: Routes = [
	{
		path: '',
		component: ContractDataLandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDataLandingRoutingModule { }
