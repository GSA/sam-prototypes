import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';

const routes: Routes = [
	{
		path: ':id',
		component: EntityRegistrationDisplayComponent,
		children: [
			{
				path: 'core-data',
				loadChildren: () => import('./entity-core-data/entity-core-data.module').then(m => m.EntityCoreDataModule)
			},
			{
				path: 'assertions',
				loadChildren: () => import('./entity-assertions/entity-assertions.module').then(m => m.EntityAssertionsModule)
			},
			{
				path: 'reps-certs',
				loadChildren: () => import('./entity-reps-certs/entity-reps-certs.module').then(m => m.EntityRepsCertsModule)
			},
			{
				path: 'responsibility-qualification',
				loadChildren: () => import('./responsibility-qualification/responsibility-qualification.module').then(m => m.ResponsibilityQualificationModule)
			},
			{
				path: 'history',
				loadChildren: () => import('./entity-history-display/entity-history-display.module').then(m => m.EntityHistoryDisplayModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationDisplayRoutingModule { }
