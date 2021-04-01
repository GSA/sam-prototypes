import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsibilityQualificationComponent } from './responsibility-qualification.component';

const routes: Routes = [
	{
		path: '',
		component: ResponsibilityQualificationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilityQualificationRoutingModule { }
