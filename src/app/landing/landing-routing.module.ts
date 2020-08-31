import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'entity-registration',
		loadChildren: () => import('./entity-registration-landing/entity-registration-landing.module').then(m => m.EntityRegistrationLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'entity-information',
		loadChildren: () => import('./entity-information-landing/entity-information-landing.module').then(m => m.EntityInformationLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'contract-data',
		loadChildren: () => import('./contract-data-landing/contract-data-landing.module').then(m => m.ContractDataLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'check-status',
		loadChildren: () => import('./status-tracker/status-tracker.module').then(m => m.StatusTrackerModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'opportunities',
		loadChildren: () => import('./opportunities-landing/opportunities-landing.module').then(m => m.OpportunitiesLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'opportunities-federal',
		loadChildren: () => import('./opportunities-landing-federal/opportunities-landing-federal.module').then(m => m.OpportunitiesLandingFederalModule),
			data: {
				id: "home"
			}
	},
	{
		path: 'hierarchy',
		loadChildren: () => import('./hierarchy-landing/hierarchy-landing.module').then(m => m.HierarchyLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'federal-hierarchy',
		loadChildren: () => import('./federal-hierarchy-landing/federal-hierarchy-landing.module').then(m => m.FederalHierarchyLandingModule),
			data: {
				id: "home"
			}
	},
	{
		path: 'assistance',
		loadChildren: () => import('./assistance-landing/assistance-landing.module').then(m => m.AssistanceLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'assistance/federal',
		loadChildren: () => import('./assistance-landing-federal/assistance-landing-federal.module').then(m => m.AssistanceLandingFederalModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'registration',
		loadChildren: () => import('./registration-landing/registration-landing.module').then(m => m.RegistrationLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'wages',
		loadChildren: () => import('./wages-landing/wages-landing.module').then(m => m.WagesLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'new-to-sam',
		loadChildren: () => import('./new-to-sam/new-to-sam.module').then(m => m.NewToSamModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'entity-compliance',
		loadChildren: () => import('./entity-compliance/entity-compliance.module').then(m => m.EntityComplianceModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'exclusions',
		loadChildren: () => import('./exclusions/exclusions.module').then(m => m.ExclusionsModule),
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
