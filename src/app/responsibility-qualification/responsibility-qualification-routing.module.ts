import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'workspace',
		loadChildren: () =>
      		import("./responsibility-qualification-workspace/responsibility-qualification-workspace.module").then((m) => m.ResponsibilityQualificationWorkspaceModule),
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilityQualificationRoutingModule { }
