import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliciesComponent } from './policies.component';

const routes: Routes = [
	{
		path: 'privacy',
		loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
		data: {
		  id: "home"
		}
	},
	{
		path: 'disclaimers',
		loadChildren: () => import('./disclaimers/disclaimers.module').then(m => m.DisclaimersModule),
		data: {
		  id: "home"
		}
	},	
	{
		path: 'accessibility',
		loadChildren: () => import('./accessibility/accessibility.module').then(m => m.AccessibilityModule),
		data: {
		  id: "home"
		}
	},	
	{
		path: 'logo',
		loadChildren: () => import('./logo-policy/logo-policy.module').then(m => m.LogoPolicyModule),
		data: {
		  id: "home"
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
