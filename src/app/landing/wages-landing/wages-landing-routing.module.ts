import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagesLandingComponent } from './wages-landing.component';
import { WagesSubPagesComponent } from './wages-sub-pages.component';

const routes: Routes = [
	{
		path: 'main',
		component: WagesLandingComponent
	},
	{
		path: '',
		component: WagesSubPagesComponent,
		children: [
			{
				path: '',
				redirectTo: 'labor-advisors',
				pathMatch: 'full'
			},
			{
				path: 'labor-advisors',		
    			loadChildren: () => import('./wages-labor-advisors/wages-labor-advisors.module').then(m => m.WagesLaborAdvisorsModule)
			},
			{
				path: 'dba-conformances',		
    			loadChildren: () => import('./wages-dba-conformances/wages-dba-conformances.module').then(m => m.WagesDbaConformancesModule)
			},
			{
				path: 'sca-conformances',		
    			loadChildren: () => import('./wages-sca-conformances/wages-sca-conformances.module').then(m => m.WagesScaConformancesModule)
			},
			{
				path: 'cross-index',		
    			loadChildren: () => import('./wages-cross-index/wages-cross-index.module').then(m => m.WagesCrossIndexModule)
			},
			{
				path: 'all-agency-memos',		
    			loadChildren: () => import('./wages-aams/wages-aams.module').then(m => m.WagesAamsModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagesLandingRoutingModule { }
