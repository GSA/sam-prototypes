import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabankReportsComponent } from './databank-reports.component';
 
const routes: Routes = [
	{
		path: '',
		component: DatabankReportsComponent
	}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabankReportsRoutingModule { }
