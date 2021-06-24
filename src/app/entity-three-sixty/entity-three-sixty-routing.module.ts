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
			},
			{
				path: 'responsibility-qualification',
				loadChildren: () => import('./responsibility-qualification/responsibility-qualification.module').then(m => m.ResponsibilityQualificationModule)
			},
			{
				path: 'entity-reporting',
				loadChildren: () => import('./entity-reporting-display/entity-reporting-display.module').then(m => m.EntityReportingDisplayModule)
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
export class EntityThreeSixtyRoutingModule { }
