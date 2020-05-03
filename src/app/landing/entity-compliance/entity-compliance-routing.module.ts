import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityComplianceComponent } from './entity-compliance.component';

const routes: Routes = [
	{
		path: '',
		component: EntityComplianceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityComplianceRoutingModule { }
