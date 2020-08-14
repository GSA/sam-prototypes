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
		path: 'contract-data',
		loadChildren: './contract-data-landing/contract-data-landing.module#ContractDataLandingModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'check-status',
		loadChildren: './status-tracker/status-tracker.module#StatusTrackerModule',
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
		path: 'opportunities-federal',
		loadChildren: './opportunities-landing-federal/opportunities-landing-federal.module#OpportunitiesLandingFederalModule',
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
		path: 'federal-hierarchy',
		loadChildren: './federal-hierarchy-landing/federal-hierarchy-landing.module#FederalHierarchyLandingModule',
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
		path: 'assistance/federal',
		loadChildren: './assistance-landing-federal/assistance-landing-federal.module#AssistanceLandingFederalModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'registration',
		loadChildren: './registration-landing/registration-landing.module#RegistrationLandingModule',
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
	},
	{
		path: 'new-to-sam',
		loadChildren: './new-to-sam/new-to-sam.module#NewToSamModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'entity-compliance',
		loadChildren: './entity-compliance/entity-compliance.module#EntityComplianceModule',
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'exclusions',
		loadChildren: './exclusions/exclusions.module#ExclusionsModule',
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
