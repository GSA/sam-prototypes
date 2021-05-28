import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityThreeSixtyComponent } from './entity-three-sixty.component';

const routes: Routes = [
	{
		path: ':id',
		component: EntityThreeSixtyComponent,
		children: [
			{
				path: 'registration',
				loadChildren: () => import('./entity-registration-display/entity-registration-display.module').then(m => m.EntityRegistrationDisplayModule)
			}
		]
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityThreeSixtyRoutingModule { }
