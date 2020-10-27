import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
		path: 'hierarchy-federal',
		loadChildren: () => import('./hierarchy-landing-federal/hierarchy-landing-federal.module').then(m => m.HierarchyLandingFederalModule),
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
		path: 'registration-entity',
		loadChildren: () => import('./registration-landing-entity/registration-landing-entity.module').then(m => m.RegistrationLandingEntityModule),
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
	},
	{
		path: 'exclusions-federal',
		loadChildren: () => import('./exclusions-federal/exclusions-federal.module').then(m => m.ExclusionsFederalModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'disaster-response',
		loadChildren: () => import('./disaster-response-landing/disaster-response-landing.module').then(m => m.DisasterResponseLandingModule),
	    data: {
	      id: "home"
	    }
	},
	{
		path: 'integrity',
		loadChildren: () => import('./integrity-landing/integrity-landing.module').then(m => m.IntegrityLandingModule),
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
