import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: 'core-data',
    pathMatch: "full",
  },
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
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRegistrationDisplayRoutingModule { }
