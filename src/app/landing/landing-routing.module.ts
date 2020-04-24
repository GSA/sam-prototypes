import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'entity-registration',
		loadChildren: './entity-registration-landing/entity-registration-landing.module#EntityRegistrationLandingModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'entity-information',
		loadChildren: './entity-information-landing/entity-information-landing.module#EntityInformationLandingModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'opportunities',
		loadChildren: './opportunities-landing/opportunities-landing.module#OpportunitiesLandingModule',
	    data: {
	      id: "home"
	    }
	},	
	{
		path: 'hierarchy',
		loadChildren: './hierarchy-landing/hierarchy-landing.module#HierarchyLandingModule',
	    data: {
	      id: "home"
	    }
	},	
	{
		path: 'assistance',
		loadChildren: './assistance-landing/assistance-landing.module#AssistanceLandingModule',
	    data: {
	      id: "home"
	    }
	},	
	{
		path: 'compliance',
		loadChildren: './compliance-landing/compliance-landing.module#ComplianceLandingModule',
	    data: {
	      id: "home"
	    }
	},	
	{
		path: 'wages',
		loadChildren: './wages-landing/wages-landing.module#WagesLandingModule',
	    data: {
	      id: "home"
	    }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
