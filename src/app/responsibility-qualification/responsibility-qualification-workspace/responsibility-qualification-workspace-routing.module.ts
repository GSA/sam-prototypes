import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsibilityQualificationWorkspaceComponent } from './responsibility-qualification-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: ResponsibilityQualificationWorkspaceComponent

	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilityQualificationWorkspaceRoutingModule { }
