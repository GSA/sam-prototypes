import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamLandingComponent } from './sam-landing.component';

const routes: Routes = [
	{
		path: '',
		component: SamLandingComponent,
		children: [
			{
				path: '',
				loadChildren: '../../home/home.module#HomeModule'
			},		
			{
			    path: 'entities',
			    loadChildren: '../../entities/entities-home/entities-home.module#EntitiesHomeModule'
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamLandingRoutingModule { }
