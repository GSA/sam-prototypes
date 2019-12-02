import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityLandingComponent } from './entity-landing.component';
import { EntityStaticHelpComponent } from './entity-static-help.component'
import { WhoRegistersComponent } from './who-registers.component';
import { BeforeYouStartComponent } from './before-you-start.component';
import { UpdatingRegistrationComponent } from './updating-registration.component';

const routes: Routes = [
	{
		path: '',
		component: EntityLandingComponent
	},
	{ 
		path: 'help',
		component: EntityStaticHelpComponent,
		children: [
			{
				path: 'who-registers',
				component: WhoRegistersComponent
			},
			{
				path: 'updating-registration',
				component: UpdatingRegistrationComponent
			},
			{
				path: 'before-you-start',
				component: BeforeYouStartComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityLandingRoutingModule { }
