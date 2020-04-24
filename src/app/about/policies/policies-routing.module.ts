import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliciesComponent } from './policies.component';

const routes: Routes = [
	{
		path: '',
		component: PoliciesComponent,
		children: [
			{
				path: 'privacy',
				loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule',
				data: {
				  id: "home"
				}
			},
			{
				path: 'disclaimers',
				loadChildren: './disclaimers/disclaimers.module#DisclaimersModule',
				data: {
				  id: "home"
				}
			},	
			{
				path: 'accessibility',
				loadChildren: './accessibility/accessibility.module#AccessibilityModule',
				data: {
				  id: "home"
				}
			},	
			{
				path: 'logo',
				loadChildren: './logo-policy/logo-policy.module#LogoPolicyModule',
				data: {
				  id: "home"
				}
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
