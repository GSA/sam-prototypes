import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'workspace',
		loadChildren: () => import("./entity-registration-workspace/entity-registration-workspace.module").then((m) => m.EntityRegistrationWorkspaceModule) 
	},
	{
		path: 'editor',
		loadChildren: () => import("./entity-registration-editor/entity-registration-editor.module").then((m) => m.EntityRegistrationEditorModule) 
	},
	{
		path: 'form',
		loadChildren: () => import("./entity-registration-form/entity-registration-form.module").then((m) => m.EntityRegistrationFormModule) 
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationRoutingModule { }
