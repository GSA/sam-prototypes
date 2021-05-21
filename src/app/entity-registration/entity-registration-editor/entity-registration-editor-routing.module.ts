import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationEditorComponent } from './entity-registration-editor.component';

const routes: Routes = [
	{
		path: '',
		component: EntityRegistrationEditorComponent,
		children: [
			{
				path: 'preview',
    			loadChildren: () => import("./entity-registration-preview/entity-registration-preview.module").then((m) => m.EntityRegistrationPreviewModule) 
			},
			{
				path: 'review',
    			loadChildren: () => import("./entity-registration-review/entity-registration-review.module").then((m) => m.EntityRegistrationReviewModule) 
			},
			{
				path: 'form',
    			loadChildren: () => import("./entity-registration-form/entity-registration-form.module").then((m) => m.EntityRegistrationFormModule) 
			}
		]
	},
	{
		path: ':id',
		component: EntityRegistrationEditorComponent,
		children: [
			{
				path: 'preview',
    			loadChildren: () => import("./entity-registration-preview/entity-registration-preview.module").then((m) => m.EntityRegistrationPreviewModule) 
			},
			{
				path: 'review',
    			loadChildren: () => import("./entity-registration-review/entity-registration-review.module").then((m) => m.EntityRegistrationReviewModule) 
			},
			{
				path: 'form',
    			loadChildren: () => import("./entity-registration-form/entity-registration-form.module").then((m) => m.EntityRegistrationFormModule) 
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationEditorRoutingModule { }
