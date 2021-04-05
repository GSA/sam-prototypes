import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwardWorkspaceComponent } from './award-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: AwardWorkspaceComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardWorkspaceRoutingModule { }
