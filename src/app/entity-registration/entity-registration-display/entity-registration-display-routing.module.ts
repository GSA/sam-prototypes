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
				path: 'exclusions',
				loadChildren: () => import('./entity-exclusions/entity-exclusions.module').then(m => m.EntityExclusionsModule)
			},
			{
				path: 'integrity',
				loadChildren: () => import('./entity-integrity/entity-integrity.module').then(m => m.EntityIntegrityModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationDisplayRoutingModule { }
