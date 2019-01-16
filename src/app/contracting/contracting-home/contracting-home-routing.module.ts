import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractingHomeComponent } from './contracting-home.component';

const routes: Routes = [
	{
		path: '',
		component: ContractingHomeComponent
	}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractingHomeRoutingModule { }
